import Timer from "./Timer";
import ProgressBar from "./ProgressBar";
import Question from "./Question";

export default function TriviaScreen() {
  return (
    <section>
      <Timer />
      <ProgressBar />
      <Question />
    </section>
  );
}
