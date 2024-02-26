import { useTrivia } from "../hooks/useTrivia";
import Options from "./Options";

export default function Question() {
  const { questions, index } = useTrivia();
  const currentQuestion = questions[index];

  return (
    <section>
      <h4>{currentQuestion.question}</h4>
      <Options question={currentQuestion} />
    </section>
  );
}
