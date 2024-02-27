import { useTrivia } from "../hooks/useTrivia";
import Options from "./Options";
import Button from "./Button";

export default function Question() {
  const { questions, index } = useTrivia();
  const currentQuestion = questions[index];

  return (
    <section className="text-base md:text-xl">
      <div className="border-1 shadow-special mb-6 rounded-lg border-gray-500 px-4 pt-4">
        <h3 className="border-b-1 border-gray-500 pb-4 ">
          {currentQuestion.question}
        </h3>
        <Options currentQuestion={currentQuestion} />
      </div>
      <Button text="NEXT QUESTION" label="next" />
    </section>
  );
}
