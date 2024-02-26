/* eslint-disable react/prop-types */
import { useTrivia } from "../hooks/useTrivia";

export default function Options({ question }) {
  // const { answer, dispatch } = useTrivia();

  return (
    <ul>
      {question.options.map((option, id) => (
        <li key={id}>{option}</li>
      ))}
    </ul>
  );
}
