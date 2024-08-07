export default function TimerChallenge({ difficulty, targetTime }) {
  return (
    <section className="challenge">
      <h2>{difficulty}</h2>
      <p className="challenge-time">
        {targetTime} Second{targetTime > 1 && "s"}
      </p>
      <p>
        <button>Start Challenge</button>
      </p>
      <p>Timer Inactive</p>
    </section>
  );
}
