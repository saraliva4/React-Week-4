import { useState, useEffect } from "react";
import axios from "axios";
import DailyForecast from "./DailyForecast.jsx";
import CurrentWeather from "./CurrentWeather.jsx";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      city: response.data.city,
      country:
        response.data.country === "United States of America"
          ? "USA"
          : response.data.country ===
              "United Kingdom of Great Britain and Northern Ireland"
            ? "UK"
            : response.data.country,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      iconUrl: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
      description: response.data.condition.description,
      feelsLike: response.data.temperature.feels_like,
      date: new Date(response.data.time * 1000),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  function search() {
    let unit = "metric";
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=02f8a7tad0e0efa9c2364cdececoab3a&units=${unit}`;
    axios.get(url).then(handleResponse);
  }

  useEffect(() => {
    search();
  }, []);

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="search m-4">
          <div className="start-50 translate-middle search-bar">
            <div>
              <form onSubmit={handleSubmit}>
                <label htmlFor="search-input">
                  <i className="fa-solid fa-magnifying-glass search-icon"></i>
                </label>

                <input
                  className=" search-input ms-1"
                  type="text"
                  placeholder="Type a city..."
                  value={city}
                  onChange={handleChange}
                />
                <input
                  type="submit"
                  value="Search"
                  className="search-button ms-1"
                />
                <button className="current-location-button ms-1">
                  Current location
                </button>
              </form>
            </div>
          </div>
        </div>
        <CurrentWeather weatherData={weatherData} />
        <DailyForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    return <div className="d-flex justify-content-center">Loading...</div>;
  }
}
