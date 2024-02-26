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
        <div className="border-1 shadow-special mb-6 rounded-lg border-gray-500 px-4 pt-4">
          <h3 className="border-b-1 border-gray-500 pb-4 ">
            {currentQuestion.question}
          </h3>
          {currentQuestion.options.map((option, index) => (
            <div
              key={index}
              className="my-2 flex items-center justify-start gap-2"
            >
              <input
                type="radio"
                id={`option-${index}`}
                name={`currentQuestion-${currentQuestion.id}-option`}
                value={option}
                checked={selectedOption === option}
                onChange={handleOptionChange}
                className="border-1 m-2 h-6 w-6 appearance-none rounded-full border-gray-300 transition-all checked:border-2  checked:bg-red-700 focus:outline-none focus:ring-gray-50/50"
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
