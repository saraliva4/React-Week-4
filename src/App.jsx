import { useState } from "react";
import axios from "axios";
import "./App.css";
import Search from "./Search";
import CurrentWeather from "./CurrentWeather";
import DailyForecast from "./DailyForecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <Search />
      <CurrentWeather />
      <DailyForecast />
      <Footer />
    </div>
  );
}
