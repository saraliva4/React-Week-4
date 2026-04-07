import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import axios from "axios";
import "./App.css";

function App() {
  function getData() {
    axios.get("https://api.github.com").then((response) => {
      console.log(response);
    });
  }

  return (
    <div>
      <h1>Axios Test 🚀</h1>
      <button onClick={getData}>Get Data</button>
    </div>
  );
}

export default App;
