import { useContext } from "react";
import { TriviaContext } from "../context/TriviaContext";

export function useTrivia() {
  const context = useContext(TriviaContext);
  if (context === undefined)
    throw new Error("useTrivia must be used within a TriviaProvider");
  return context;
}
