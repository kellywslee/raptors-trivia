import { useTrivia } from "../hooks/useTrivia";

export default function FinishedScreen() {
  const { score, dispatch } = useTrivia();

  const percentage = Math.ceil((score / 20) * 100);

  let message;
  if (percentage === 100) {
    message = "🏆 You're a true Raptors fan!";
  }
  if (percentage >= 80 && percentage < 100) {
    message = "😄 Impressive!";
  }
  if (percentage >= 50 && percentage < 80) {
    message = "🙂 Not bad!";
  }
  if (percentage > 0 && percentage < 50) {
    message = "😬 Better luck next time!";
  }
  if (percentage === 0) {
    message = "🤯 Time to brush up on your Raptors knowledge!";
  }

  return (
    <section className="flex flex-col gap-4">
      <p>You scored {percentage}%</p>
      <p className="text-lg">{message}</p>
    </section>
  );
}
