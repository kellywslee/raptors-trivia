import { useTrivia } from "../hooks/useTrivia";

export default function ProgressBar() {
  const { index, numQuestions } = useTrivia();
  console.log(index, numQuestions);
  return (
    <div>
      <progress max={numQuestions} value={index} />
      <p>
        Question {index + 1} / {numQuestions}
      </p>
    </div>
  );
}
