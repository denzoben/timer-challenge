import { useState, useRef } from "react";

export default function TimerChallenge({ difficulty, targetTimer }) {
  const timer = useRef();

  const [startTimer, setStartTimer] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  function handleGameStart() {
    setStartTimer(true);
    timer.current = setTimeout(() => {
      setTimerExpired(true);
    }, targetTimer * 1000);
  }

  function handleGameStop() {
    setStartTimer(false);
    clearTimeout(timer.current);
  }

  return (
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
  );
}
