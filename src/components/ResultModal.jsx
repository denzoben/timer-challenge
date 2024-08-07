import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ResultModel = forwardRef(function ResultModal(
  {targetTimer, remainingTime, onClose},
  ref
) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTimer * 1000)) * 100);

  return (
    createPortal(
    <dialog ref={dialog} className="result-modal">
      {remainingTime <= 0 && <h2>You Lost!</h2> }
      {remainingTime > 0 && <h2>Your Score: {score}</h2>}
      <p>
        The target time was <strong>{targetTimer} second{targetTimer > 1 ? "s" : null}.</strong>
      </p>
      <p>
        You stopped the timer with <strong>{formattedRemainingTime} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={onClose}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
    )
  );
});
export default ResultModel;
