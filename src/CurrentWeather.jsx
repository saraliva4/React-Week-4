import React from "react";
import axios from "axios";
import "./CurrentWeather.css";

export default function CurrentWeather() {
  return (
    <div className="CurrentWeather">
      <div className="today card">
        <div className="card-body">
          <h1 className="card-title" id="current-location">
            Tromsø, Norway
          </h1>
          <h6 className="card-subtitle mb-2 text-muted" id="date-zero">
            January 22nd
          </h6>
          <div className="row">
            <div className="col-6">
              <h4 className="card-text mb-5">
                Current temperature
                <span>
                  <span className="current-degrees-emoji m-2">🌧</span>
                  <span className="current-degrees" id="current-degrees">
                    3
                  </span>
                  <span className="celsius-fahrenheit">
                    <a href="/" className="degree-unit" id="celsius">
                      °C
                    </a>
                    |
                    <a href="/" className="degree-unit" id="fahrenheit">
                      °F
                    </a>
                  </span>
                </span>
              </h4>
            </div>
            <div className="col-6">
              <ul>
                <li>Chance of rain: 86%</li>
                <li>Humidity: 75%</li>
                <li>Wind: 10 m/s</li>
              </ul>
            </div>
          </div>
          <br />

          <div className="row">
            <div className="col-2 today-hours" id="hour-one">
              14:00
              <br />
              🌧 3°
            </div>
            <div className="col-2 today-hours" id="hour-two">
              15:00
              <br />
              🌨 3°
            </div>
            <div className="col-2 today-hours" id="hour-three">
              16:00
              <br />
              🌨 3°
            </div>
            <div className="col-2 today-hours" id="hour-four">
              17:00
              <br />
              🌨 2°
            </div>
            <div className="col-2 today-hours" id="hour-five">
              18:00
              <br />
              🌨 2°
            </div>
            <div className="col-2 today-hours" id="hour-six">
              19:00
              <br />
              🌨 2°
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
