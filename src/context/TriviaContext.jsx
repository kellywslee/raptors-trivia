/* eslint-disable no-case-declarations */
/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { triviaData } from "../data/data";

export const TriviaContext = createContext();

const initialState = {
  status: "ready",
  questions: triviaData,
  index: 0,
  answer: null,
  score: 0,
};

function triviaReducer(state, action) {
  switch (action.type) {
    case "ready":
      return {
        ...state,
      };
    case "start":
      return {
        ...state,
        status: "active",
        // timeRemaining: 200,
      };
    case "submitAnswer":
      const currentQuestion = state.questions[state.index];
      const isCorrect = currentQuestion.answer === action.payload;

      return {
        ...state,
        answer: action.payload,
        score: isCorrect ? state.score + 1 : state.score,
      };
    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    default:
      throw new Error("Action unkonwn");
  }
}

export function TriviaProvider({ children }) {
  const [{ status, questions, index, answer, score }, dispatch] = useReducer(
    triviaReducer,
    initialState,
  );

  const numQuestions = questions.length;

  return (
    <TriviaContext.Provider
      value={{
        status,
        questions,
        numQuestions,

        index,
        answer,
        score,
        dispatch,
      }}
    >
      {children}
    </TriviaContext.Provider>
  );
}
