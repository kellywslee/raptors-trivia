import Timer from "./Timer";
import ProgressBar from "./ProgressBar";
import Question from "./Question";

export default function TriviaScreen() {
  return (
    <section className="flex w-full max-w-screen-sm flex-col gap-4">
      <h1 className="text-3xl font-bold">Raptors Trivia</h1>
      <Timer />
      <ProgressBar />
      <Question />
    </section>
  );
}
