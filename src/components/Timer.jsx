import { useState, useEffect } from "react";
import { useTrivia } from "../hooks/useTrivia";

export default function Timer() {
  const { dispatch } = useTrivia();
  const [timeRemaining, setTimeRemaining] = useState(200);

  const mins = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  useEffect(
    function () {
      if (timeRemaining === 0) {
        dispatch({ type: "quizFinished" });
        return;
      }

      const id = setInterval(function () {
        setTimeRemaining((s) => s - 1);
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch, timeRemaining],
  );

  return (
    <div className="text-lg">
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}
