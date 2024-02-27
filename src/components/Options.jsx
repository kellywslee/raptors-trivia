/* eslint-disable react/prop-types */
import { useTrivia } from "../hooks/useTrivia";

export default function Options({ currentQuestion }) {
  const { dispatch, answer } = useTrivia();

  const hasAnswered = answer !== null;
  console.log(answer, hasAnswered, currentQuestion.correctAnswer);

  return (
    <div className="flex flex-col gap-3 p-6">
      {currentQuestion.options.map((option, index) => (
        <button
          key={index}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "submitAnswer", payload: index })}
          className={`hover:shadow-special rounded-lg border-2 border-gray-500 p-3 text-base transition-all md:text-xl ${
            hasAnswered
              ? index === currentQuestion.correctAnswer
                ? "border-green-500"
                : index === answer
                  ? "border-red-500"
                  : "border-gray-500"
              : "hover:border-gray-500"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
