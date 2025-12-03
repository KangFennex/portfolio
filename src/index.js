import React from "react";
import "./sass/utilities/_index.scss"
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { LightModeProvider } from "./components/utils/LightModeContext";
import { SoundProvider } from "./components/utils/SoundContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LightModeProvider>
      <SoundProvider>
        <Router>
          <App />
        </Router>
      </SoundProvider>
    </LightModeProvider>
  </React.StrictMode>
);
