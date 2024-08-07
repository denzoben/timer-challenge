import { useState, useRef } from "react";

import ResultModel from "./ResultModal";

export default function TimerChallenge({ difficulty, targetTimer }) {
  const timer = useRef(); 
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTimer * 1000);

  const timerIsActive = timeRemaining >= 0 && timeRemaining < targetTimer * 1000;

  if(timeRemaining <= 0){
    clearInterval(timer.current);
    dialog.current.open();
  }

  function handleGameStart() {
    timer.current = setInterval(() => {
        setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  }

  function handleGameStop() {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function resetTimerChallenge(){
    setTimeRemaining(targetTimer * 1000);
  }

  return (
    <>
    <ResultModel ref={dialog} targetTimer={targetTimer} remainingTime={timeRemaining} onClose={resetTimerChallenge}/>
    <section className="challenge">
      <h2>{difficulty}</h2>
      <p className="challenge-time">
        {targetTimer} Second{targetTimer > 1 && "s"}
      </p>
      <p>
        <button onClick={timerIsActive ? handleGameStop : handleGameStart}>
          {timerIsActive ? "Stop Challenge" : "Start Challenge"}
        </button>
      </p>
      <p className={timerIsActive ? "active" : null}>
        {timerIsActive ? "Timer is running...!" : "Timer Inactive"}
      </p>
    </section>
    </>
  );
}
