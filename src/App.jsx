import { useState } from "react";
import axios from "axios";
import "./App.css";
import CurrentWeather from "./Search";
import DailyForecast from "./Search";

function App() {
  function getData() {
    axios.get("https://api.github.com").then((response) => {
      console.log(response);
    });
  }

  return (
    <div className="App">
      <CurrentWeather />
      <DailyForecast />
    </div>
  );
}

export default App;
