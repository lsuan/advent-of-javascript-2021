import podcastCover from "./assets/images/podcast-cover.png";

function App() {
  const checkAllInRange = (id: number) => {
    const checkboxes = document.querySelectorAll(
      "input[type='checkbox']"
    ) as NodeListOf<HTMLInputElement>;
    for (let epNum = id - 2; epNum >= 0; epNum--) {
      console.log(checkboxes[epNum]);
      if (checkboxes[epNum].checked) {
        break;
      }
      checkboxes[epNum].checked = true;
    }
  };

  return (
    <div className="wrapper">
      <div className="cover">
        <img src={podcastCover} alt="Compressed.fm" />
      </div>
      <div className="content">
        <h1>Listen to all the Compressed.fm Episodes</h1>

        <ul className="episodes">
          <li>
            <label htmlFor="episode-1">
              <input
                type="checkbox"
                name="episode-1"
                onClick={(e) => {
                  if (e.shiftKey) checkAllInRange(1);
                }}
                id="episode-1"
              />
              <span>1 || Trailer</span>
            </label>
          </li>
          <li>
            <label htmlFor="episode-2">
              <input
                type="checkbox"
                name="episode-2"
                onClick={(e) => {
                  if (e.shiftKey) checkAllInRange(2);
                }}
                id="episode-2"
              />
              <span>2 || James Q Quick Origin Story</span>
            </label>
          </li>
          <li>
            <label htmlFor="episode-3">
              <input
                type="checkbox"
                name="episode-3"
                onClick={(e) => {
                  if (e.shiftKey) checkAllInRange(3);
                }}
                id="episode-3"
              />
              <span>3 || Amy Dutton's Origin Story</span>
            </label>
          </li>
          <li>
            <label htmlFor="episode-4">
              <input
                type="checkbox"
                name="episode-4"
                onClick={(e) => {
                  if (e.shiftKey) checkAllInRange(4);
                }}
                id="episode-4"
              />
              <span>4 || Starting a New Development Project</span>
            </label>
          </li>
          <li>
            <label htmlFor="episode-5">
              <input
                type="checkbox"
                name="episode-5"
                onClick={(e) => {
                  if (e.shiftKey) checkAllInRange(5);
                }}
                id="episode-5"
              />
              <span>5 || How Do you Start a New Design Project?</span>
            </label>
          </li>
          <li>
            <label htmlFor="episode-6">
              <input
                type="checkbox"
                name="episode-6"
                onClick={(e) => {
                  if (e.shiftKey) checkAllInRange(6);
                }}
                id="episode-6"
              />
              <span>6 || Freelancing (Part 1)</span>
            </label>
          </li>
          <li>
            <label htmlFor="episode-7">
              <input
                type="checkbox"
                name="episode-7"
                onClick={(e) => {
                  if (e.shiftKey) checkAllInRange(7);
                }}
                id="episode-7"
              />
              <span>7 || Freelancing (Part 2)</span>
            </label>
          </li>
          <li>
            <label htmlFor="episode-8">
              <input
                type="checkbox"
                name="episode-8"
                onClick={(e) => {
                  if (e.shiftKey) checkAllInRange(8);
                }}
                id="episode-8"
              />
              <span>8 || The Tech Behind jamesqquick.com</span>
            </label>
          </li>
          <li>
            <label htmlFor="episode-9">
              <input
                type="checkbox"
                name="episode-9"
                onClick={(e) => {
                  if (e.shiftKey) checkAllInRange(9);
                }}
                id="episode-9"
              />
              <span>9 || The Tech Behind SelfTeach.me</span>
            </label>
          </li>
          <li>
            <label htmlFor="episode-10">
              <input
                type="checkbox"
                name="episode-10"
                onClick={(e) => {
                  if (e.shiftKey) checkAllInRange(10);
                }}
                id="episode-10"
              />
              <span>10 || Tech Behind SelfTeach.me</span>
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
