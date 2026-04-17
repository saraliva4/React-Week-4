import { useState, useEffect } from "react";
import axios from "axios";
import "./CurrentWeather.css";
import FormattedDate from "./FormattedDate.jsx";

export default function CurrentWeather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
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
      icon: `https://openweathermap.org/payload/api/media/file/10d@2x.png`,
      description: response.data.condition.description,
      feelsLike: response.data.temperature.feels_like,
      date: new Date(response.data.time * 1000),
    });
  }

  function search() {
    let unit = "metric";
    let url = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=02f8a7tad0e0efa9c2364cdececoab3a&units=${unit}`;
    axios.get(url).then(handleResponse);
  }

  useEffect(() => {
    search();
  }, [props.city]);

  if (weatherData.ready) {
    return (
      <div className="CurrentWeather">
        <div className="today card">
          <div className="card-body p-5">
            <h1 className="card-title" id="current-location">
              {weatherData.city}, {weatherData.country}
            </h1>
            <h6 className="card-subtitle mt-3 mb-5 text-muted" id="date-zero">
              <FormattedDate date={weatherData.date} />
            </h6>
            <div className="row align-items-center">
              <div className="col-6 text-end pe-5">
                <h4 className="card-text">Current temperature</h4>
                <div>
                  <span className="current-degrees-emoji m-2">
                    <img src="{weatherData.icon}" alt="" />
                  </span>
                  <span className="current-degrees" id="current-degrees">
                    {Math.round(weatherData.temperature)}
                  </span>
                  <span className="celsius-fahrenheit">
                    <a href="/" className="degree-unit me-1" id="celsius">
                      °C
                    </a>
                    |
                    <a href="/" className="degree-unit ms-1" id="fahrenheit">
                      °F
                    </a>
                  </span>
                </div>
              </div>
              <div className="col-6 ps-4 pt-4 border-start">
                <ul>
                  <li>Feels like: {Math.round(weatherData.feelsLike)}°</li>
                  <li>Humidity: {Math.round(weatherData.humidity)}%</li>
                  <li>Wind: {Math.round(weatherData.wind)}m/s</li>
                </ul>
              </div>
            </div>
            <br />

            <div className="d-none d-md-flex justify-content-evenly mt-3">
              <div className="today-hours" id="hour-one">
                14:00
                <br />
                <img src="{weatherData.icon}" alt="" /> 3°
              </div>
              <div className="today-hours" id="hour-two">
                15:00
                <br />
                🌨 3°
              </div>
              <div className="today-hours" id="hour-three">
                16:00
                <br />
                🌨 3°
              </div>
              <div className="today-hours" id="hour-four">
                17:00
                <br />
                🌨 2°
              </div>
              <div className="today-hours" id="hour-five">
                18:00
                <br />
                🌨 2°
              </div>
              <div className="today-hours" id="hour-six">
                19:00
                <br />
                🌨 2°
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="d-flex justify-content-center">Loading...</div>;
  }
}
