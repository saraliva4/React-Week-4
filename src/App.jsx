import { useState } from "react";
import axios from "axios";
import "./App.css";
import Search from "./Search";
import CurrentWeather from "./CurrentWeather";
import DailyForecast from "./DailyForecast";

function App() {
  function getData() {
    axios.get("https://api.github.com").then((response) => {
      console.log(response);
    });
  }

  return (
    <div className="App">
      <Search />
      <CurrentWeather />
      <DailyForecast />
    </div>
  );
}

export default App;
