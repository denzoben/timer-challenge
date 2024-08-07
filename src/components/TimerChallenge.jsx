import { useState, useRef } from "react";

import ResultModel from "./ResultModal";

export default function TimerChallenge({ difficulty, targetTimer }) {
  const timer = useRef();
  const dialog = useRef();

  const [startTimer, setStartTimer] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  function handleGameStart() {
    setStartTimer(true);
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      dialog.current.open();
    }, targetTimer * 1000);
  }

  function handleGameStop() {
    setStartTimer(false);
    clearTimeout(timer.current);
  }

  return (
    <>
    <ResultModel ref={dialog} result="lost" targetTimer={targetTimer}/>
    <section className="challenge">
      <h2>{difficulty}</h2>
      <p className="challenge-time">
        {targetTimer} Second{targetTimer > 1 && "s"}
      </p>
      {timerExpired && <p>You Lost!</p>}
      <p>
        <button onClick={startTimer ? handleGameStop : handleGameStart}>
          {startTimer ? "Stop Challenge" : "Start Challenge"}
        </button>
      </p>
      <p className={startTimer ? "active" : null}>
        {startTimer ? "Timer is running...!" : "Timer Inactive"}
      </p>
    </section>
    </>
  );
}
