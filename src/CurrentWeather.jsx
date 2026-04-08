import React from "react";
import axios from "axios";
import Search from "./Search";
import HourlyForecast from "./HourlyForecast";
import "./CurrentWeather.css";

export default function CurrentWeather() {
  return (
    <div className="CurrentWeather">
      <Search />
      <HourlyForecast />
    </div>
  );
}
