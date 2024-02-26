import { useEffect } from "react";
import { useTrivia } from "../hooks/useTrivia";

export default function Timer() {
  const { timeRemaining, dispatch } = useTrivia();
  const min = Math.floor(timeRemaining / 60);
  const sec = timeRemaining % 60;

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(timer);
  }, [dispatch]);

  return (
    <div>
      {min}:{sec < 10 ? `0${sec}` : sec}
    </div>
  );
}
