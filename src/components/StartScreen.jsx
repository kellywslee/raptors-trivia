import { IoBasketballSharp } from "react-icons/io5";
import Button from "./Button";

export default function StartScreen() {
  return (
    <section className="m-auto flex flex-col items-center justify-center gap-4">
      <IoBasketballSharp className="text-9xl text-gray-500" />
      <Button text="START" />
    </section>
  );
}
