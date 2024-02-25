import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { TriviaProvider } from "./context/TriviaContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TriviaProvider>
      <App />
    </TriviaProvider>
  </React.StrictMode>,
);
