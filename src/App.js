import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Accra" />
        <footer>
          This project was coded by{" "}
          <a
            href="www.linkedin.com/in/margaret-kudzordzinawo-37956b283"
            target="_blank"
          >
            Margaret
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Emefa123/weather-react-app"
            target="_blank"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
