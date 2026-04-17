import React, { useState } from "react";
import "./App.css";
import Search from "./Search";
import CurrentWeather from "./CurrentWeather";
import DailyForecast from "./DailyForecast";
import Footer from "./Footer";

export default function App() {
  const [city, setCity] = useState("");

  return (
    <div className="App">
      <Search setCity={setCity} />
      <CurrentWeather city={city} />
      <DailyForecast />
      <Footer />
    </div>
  );
}
