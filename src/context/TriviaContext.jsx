/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
// import data from "../data/data";

const TriviaContext = createContext();

const initialState = {
  status: "ready",
  questions: [],
  answer: null,
  score: 0,
  timeRemaining: null,
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
        timeRemaining: 200,
      };
  }
}

export function TriviaProvider({ children }) {
  const [{ status }, dispatch] = useReducer(triviaReducer, initialState);

  return (
    <TriviaContext.Provider value={{ status, dispatch }}>
      {children}
    </TriviaContext.Provider>
  );
}
