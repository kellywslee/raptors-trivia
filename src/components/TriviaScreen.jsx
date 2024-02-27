import Timer from "./Timer";
import ProgressBar from "./ProgressBar";
import Question from "./Question";

export default function TriviaScreen() {
  return (
    <section className="flex w-full max-w-screen-sm flex-col gap-4">
      <Timer />
      <ProgressBar />
      <Question />
    </section>
  );
}
