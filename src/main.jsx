import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import GeminiState from "./contexts/GeminiAPIContext.jsx";

createRoot(document.getElementById("root")).render(
  <GeminiState>
    <App />
  </GeminiState>
);
