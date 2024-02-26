import Timer from "./Timer";
import ProgressBar from "./ProgressBar";
import Question from "./Question";

export default function TriviaScreen() {
  return (
    <section className="flex flex-col gap-4">
      <Timer />
      <ProgressBar />
      <Question />
    </section>
  );
}
