import { IoBasketballSharp } from "react-icons/io5";
import { useTrivia } from "../hooks/useTrivia";
import Button from "./Button";

export default function StartScreen() {
  const { dispatch } = useTrivia();

  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <IoBasketballSharp className="text-9xl text-gray-500" />
      <Button
        text="START"
        onClick={() => dispatch({ type: "start" })}
        label="start"
      />
    </section>
  );
}
