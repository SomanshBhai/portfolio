import Lenis from "lenis";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";

const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;

let lenis = null;
let animationFrame = null;

if (!isTouchDevice) {
  lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    animationFrame = requestAnimationFrame(raf);
  }

  animationFrame = requestAnimationFrame(raf);
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);