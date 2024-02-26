import { useState } from "react";
import { useTrivia } from "../hooks/useTrivia";
import Button from "./Button";

export default function Question() {
  const { questions, index, dispatch } = useTrivia();
  const [selectedOption, setSelectedOption] = useState("");
  const currentQuestion = questions[index];

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: "submitAnswer", payload: selectedOption });
    setSelectedOption("");
  };

  return (
    <section>
      <form>
        <h3>{currentQuestion.question}</h3>
        {currentQuestion.options.map((option, index) => (
          <div key={index}>
            <input
              type="radio"
              id={`option-${index}`}
              name={`currentQuestion-${currentQuestion.id}-option`}
              value={option}
              checked={selectedOption === option}
              onChange={handleOptionChange}
            />
            <label htmlFor={`option-${index}`}>{option}</label>
          </div>
        ))}
        <Button text="NEXT QUESTION" onClick={handleSubmit} />
      </form>
    </section>
  );
}
