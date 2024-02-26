import Timer from "./Timer";
import ProgressBar from "./ProgressBar";
import Question from "./Question";
import Button from "./Button";

export default function TriviaScreen() {
  return (
    <section>
      <Timer />
      <ProgressBar />
      <Question />
      <Button />
    </section>
  );
}
