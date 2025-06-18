import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style/index.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode className="bg-gradient-to-r from-lazuli-900 to-lazuli-800 !important">
    <App />
  </StrictMode>
);
