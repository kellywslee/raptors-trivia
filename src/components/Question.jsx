import { useTrivia } from "../hooks/useTrivia";
import Options from "./Options";
import NextButton from "./NextButton";

export default function Question() {
  const { questions, index } = useTrivia();
  const currentQuestion = questions[index];

  return (
    <section className="text-base md:text-xl">
      <div className="border-1 shadow-special mb-4 rounded-lg border-gray-500 px-4 pt-4">
        <h3 className="border-b-1 flex h-24 items-center justify-center border-gray-500 pb-4">
          {currentQuestion.question}
        </h3>
        <Options currentQuestion={currentQuestion} />
      </div>
      <NextButton />
    </section>
  );
}
