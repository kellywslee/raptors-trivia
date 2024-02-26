import { useTrivia } from "../hooks/useTrivia";

export default function Question() {
  const { questions, index } = useTrivia();
  const currentQuestion = questions[index];

  return (
    <section>
      <h4>{currentQuestion.question}</h4>
    </section>
  );
}
