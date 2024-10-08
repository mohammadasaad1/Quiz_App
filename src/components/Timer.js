import { useEffect } from "react";

function Timer({ quizSec, dispatch }) {
  const mins = Math.floor(quizSec / 60);
  const seconds = quizSec % 60;
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
      return () => clearInterval(id);
    },
    [dispatch]
  );
  //   useEffect(
  //     function () {
  //       const id = setInterval(function () {
  //         dispatch({ type: "tick" });
  //       }, 1000);

  //       return () => clearInterval(id);
  //     },
  //     [dispatch]
  //   );

  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}

export default Timer;
