import { useTrivia } from "../hooks/useTrivia";

export default function NextButton() {
  const { index, numQuestions, dispatch } = useTrivia();

  if (index < numQuestions - 1) {
    return (
      <button
        onClick={() => dispatch({ type: "nextQuestion" })}
        className="mt-6 rounded-lg bg-red-700 px-4 py-3 text-base font-bold text-gray-50 transition-all hover:bg-red-800 md:text-lg"
      >
        Next Question
      </button>
    );
  }

  if (index === numQuestions - 1) {
    return (
      <button
        onClick={() => dispatch({ type: "finish" })}
        className="mt-6 rounded-lg bg-red-700 px-4 py-3 text-base font-bold text-gray-50 transition-all hover:bg-red-800 md:text-lg"
      >
        Finish
      </button>
    );
  }
}
