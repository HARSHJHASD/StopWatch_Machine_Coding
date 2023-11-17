import "./styles.css";
import React, { useEffect, useState } from "react";

export default function App() {
  const [start, setStart] = useState(false);
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    if (start) {
      const StartInterVel = setInterval(() => {
        setSeconds(seconds + 1);
        console.log(seconds);
      }, 1000);
      return () => {
        clearInterval(StartInterVel);
      };
    }
  }, [start, seconds]);

  const format = (value) => {
    const hours = Math.floor(value / 3600);
    const Mints = Math.floor((value % 3600) / 60);
    const sec = value % 60;
    return `${hours} hrs ${Mints} mints ${sec} seconds`;
  };
  return (
    <div className="App">
      <h1>{format(seconds)}</h1>
      <button
        onClick={() => {
          setStart(true);
        }}
      >
        Start StopWatch
      </button>
      <button
        onClick={() => {
          setSeconds(0);
          setStart(false);
        }}
      >
        Reset{" "}
      </button>
      <button
        onClick={() => {
          // setSeconds(0);
          setStart(!start);
        }}
      >
        Pause{" "}
      </button>
    </div>
  );
}
