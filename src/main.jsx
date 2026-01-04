import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";   // ✅ Important — this loads Tailwind


// ✨ Import AOS animation library
import AOS from "aos";
import "aos/dist/aos.css";

// Initialize AOS
AOS.init();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
