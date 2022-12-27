import { useEffect, useState } from "react";
import gear from "./assets/images/gear.svg";

function App() {
  const [minutes, setMinutes] = useState<string>("15");
  const [seconds, setSeconds] = useState<string>("00");
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isEditable, setIsEditable] = useState<boolean>(false);

  useEffect(() => {
    let interval: NodeJS.Timer | undefined = undefined;
    if (isRunning) {
      const countdown = (minutes: string, seconds: string) => {
        let mins = Number(minutes);
        let secs = Number(seconds);

        if (mins === 0 && secs === 0) {
          alert("Time's Up!");
          setIsRunning(false);
          setMinutes("15");
          setSeconds("00");
        } else {
          if (secs === 0) {
            mins--;
            secs = 59;
          } else {
            secs--;
          }
          setMinutes(String(mins).padStart(2, "0"));
          setSeconds(String(secs).padStart(2, "0"));
        }
      };

      interval = setInterval(() => countdown(minutes, seconds), 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning, minutes, seconds]);

  const changeMinutes = (e: React.ChangeEvent<HTMLInputElement>) => {
    const minutes = e.target.value;
    if (!isNaN(Number(minutes))) {
      setMinutes(minutes);
    }
  };

  const changeSeconds = (e: React.ChangeEvent<HTMLInputElement>) => {
    const seconds = e.target.value;
    if (!isNaN(Number(seconds))) {
      setSeconds(seconds);
    }
  };

  return (
    <div className="wrapper">
      <div className="ring">
        <svg width="518" height="518" viewBox="0 0 518 518">
          <circle strokeWidth="9px" x="0" y="y" cx="259" cy="259" r="254" />
        </svg>
      </div>

      <div className="timer">
        <div className="time">
          <div className="minutes">
            <input
              type="text"
              value={minutes}
              onChange={changeMinutes}
              disabled={!isEditable}
            />
          </div>
          <div className="colon">:</div>
          <div className="seconds">
            <input
              type="text"
              value={seconds}
              onChange={changeSeconds}
              disabled={!isEditable}
            />
          </div>
        </div>
        <button
          className="start"
          onClick={() => {
            setIsRunning(!isRunning);
          }}
        >
          {isRunning ? "Pause" : "Start"}
        </button>
        <button className="settings" onClick={() => setIsEditable(!isEditable)}>
          <img src={gear} alt="Settings" />
        </button>
      </div>
    </div>
  );
}

export default App;
