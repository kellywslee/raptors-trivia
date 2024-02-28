import { useTrivia } from "../hooks/useTrivia";
import Header from "./Header";
import Basketball from "./Basketball";
import Button from "./Button";

export default function StartScreen() {
  const { dispatch } = useTrivia();

  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <Header />
      <Basketball />

      <Button
        text="START"
        onClick={() => dispatch({ type: "start" })}
        label="start"
      />
    </section>
  );
}
