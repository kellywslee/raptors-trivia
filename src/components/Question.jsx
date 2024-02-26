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
    <section className="text-base md:text-xl">
      <form>
        <div className="border-1 mb-6">
          <h3>{currentQuestion.question}</h3>
          {currentQuestion.options.map((option, index) => (
            <div key={index} className="border-t-1 my-1 flex gap-2">
              <input
                type="radio"
                id={`option-${index}`}
                name={`currentQuestion-${currentQuestion.id}-option`}
                value={option}
                checked={selectedOption === option}
                onChange={handleOptionChange}
                className="ml-2"
              />
              <label htmlFor={`option-${index}`}>{option}</label>
            </div>
          ))}
        </div>
        <Button text="NEXT QUESTION" onClick={handleSubmit} label="next" />
      </form>
    </section>
  );
}
