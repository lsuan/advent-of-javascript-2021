import { useEffect, useState } from "react";

function App() {
  const [jigglingChar, setJigglingChar] = useState<string>("R");
  const [error, setError] = useState<string>("");
  const [counter, setCounter] = useState<number>(0);

  const getRandomKey = () => {
    const keys = document.getElementsByClassName("key");
    const randomCharIndex = Math.floor(Math.random() * keys.length);
    const key = keys[randomCharIndex].getAttribute("data-key") as string;
    return key.toUpperCase();
  };

  const addJiggle = (key: string) => {
    const nextCharElement = document.querySelector(
      `.key[data-key='${key}']`
    ) as Element;
    nextCharElement.classList.add("jiggle");
  };

  // code to randomize every key onload
  // useEffect(() => {
  //   const key = getRandomKey();
  //   setJigglingChar(key);
  //   addJiggle(key);
  // }, []);

  const handleEvent = (key: string) => {
    setError("");
    setJigglingChar(key);
    const currentCharElement = document.querySelector(".jiggle") as Element;
    currentCharElement.classList.remove("jiggle");
    addJiggle(key);
  };

  document.onkeyup = (e: KeyboardEvent) => {
    if (e.key.toUpperCase() === jigglingChar) {
      const key = getRandomKey();
      handleEvent(key);
      setCounter((prev) => prev + 1);
    } else {
      setCounter(0);
      setError(
        `You chose ${e.key.toUpperCase()}, but the correct key is ${jigglingChar}`
      );
    }
  };

  return (
    <div className="keyboard">
      {error !== "" && <div className="error">{error}</div>}
      <h1>Eyes on the Screen</h1>
      <div className="counter">
        <p>Correct:</p>
        <span>{counter}</span>
      </div>
      <div className="row">
        <button className="key" data-key="`">
          `
        </button>
        <button className="key" data-key="1">
          1
        </button>
        <button className="key" data-key="2">
          2
        </button>
        <button className="key" data-key="3">
          3
        </button>
        <button className="key" data-key="4">
          4
        </button>
        <button className="key" data-key="5">
          5
        </button>
        <button className="key" data-key="6">
          6
        </button>
        <button className="key" data-key="7">
          7
        </button>
        <button className="key" data-key="8">
          8
        </button>
        <button className="key" data-key="9">
          9
        </button>
        <button className="key" data-key="0">
          0
        </button>
        <button className="key" data-key="-">
          -
        </button>
        <button className="key" data-key="=">
          =
        </button>
        <button className="key" data-key="BACKSPACE">
          DEL
        </button>
      </div>
      <div className="row">
        <button className="key utility" data-key="TAB">
          Tab
        </button>
        <button className="key" data-key="Q">
          Q
        </button>
        <button className="key" data-key="W">
          W
        </button>
        <button className="key" data-key="E">
          E
        </button>
        <button className="key jiggle" data-key="R">
          R
        </button>
        <button className="key" data-key="T">
          T
        </button>
        <button className="key" data-key="Y">
          Y
        </button>
        <button className="key" data-key="U">
          U
        </button>
        <button className="key" data-key="I">
          I
        </button>
        <button className="key" data-key="O">
          O
        </button>
        <button className="key" data-key="P">
          P
        </button>
        <button className="key" data-key="[">
          [
        </button>
        <button className="key" data-key="]">
          ]
        </button>
        <button className="key" data-key="\">
          \
        </button>
      </div>
      <div className="row">
        <button className="key utility" data-key="CAPSLOCK">
          CAPS
        </button>
        <button className="key" data-key="A">
          A
        </button>
        <button className="key" data-key="S">
          S
        </button>
        <button className="key" data-key="D">
          D
        </button>
        <button className="key" data-key="F">
          F
        </button>
        <button className="key" data-key="G">
          G
        </button>
        <button className="key" data-key="H">
          H
        </button>
        <button className="key" data-key="J">
          J
        </button>
        <button className="key" data-key="K">
          K
        </button>
        <button className="key" data-key="L">
          L
        </button>
        <button className="key" data-key=";">
          ;
        </button>
        <button className="key" data-key="'">
          '
        </button>
        <button className="key utility" data-key="ENTER">
          ENTER
        </button>
      </div>
      <div className="row">
        <button className="key utility" data-key="SHIFT">
          SHIFT
        </button>
        <button className="key" data-key="Z">
          Z
        </button>
        <button className="key" data-key="X">
          X
        </button>
        <button className="key" data-key="C">
          C
        </button>
        <button className="key" data-key="V">
          V
        </button>
        <button className="key" data-key="B">
          B
        </button>
        <button className="key" data-key="N">
          N
        </button>
        <button className="key" data-key="M">
          M
        </button>
        <button className="key" data-key=",">
          ,
        </button>
        <button className="key" data-key=".">
          .
        </button>
        <button className="key" data-key="/">
          /
        </button>
        <button className="key utility" data-key="SHIFT">
          SHIFT
        </button>
      </div>
    </div>
  );
}

export default App;
