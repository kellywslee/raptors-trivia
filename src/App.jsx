import { useTrivia } from "./hooks/useTrivia";
import StartScreen from "./components/StartScreen";
import Footer from "./components/Footer";
import TriviaScreen from "./components/TriviaScreen";
import "./App.css";

function App() {
  const { status } = useTrivia();

  return (
    <>
      <main>
        {status === "ready" && <StartScreen />}
        {status === "active" && <TriviaScreen />}
      </main>
      <Footer />
    </>
  );
}

export default App;
