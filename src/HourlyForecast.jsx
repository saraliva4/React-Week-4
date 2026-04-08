import React from "react";
import axios from "axios";
import "./HourlyForecast.css";

export default function HourlyForecast() {
  return (
    <div className="Hourly Forecast">
      <div className="today card currently" style="width: 30rem">
        <div className="card-body currently">
          <h1 className="card-title currently" id="current-location">
            Tromsø, Norway
          </h1>
          <h6
            className="card-subtitle mb-2 text-muted currently"
            id="date-zero"
          >
            January 22nd
          </h6>
          <br />
          <div className="row">
            <div className="col-6">
              <h4 className="card-text currently">
                Current temperature
                <br />
                <br />
                <span>
                  <span className="current-degrees-emoji">🌧</span>
                  <span className="current-degrees" id="current-degrees">
                    3
                  </span>
                  <span className="celsius-fahrenheit">
                    <a href="#" className="degree-unit" id="celsius">
                      °C
                    </a>
                    |
                    <a href="#" className="degree-unit" id="fahrenheit">
                      °F
                    </a>
                  </span>
                </span>
              </h4>
            </div>
            <div className="col-6">
              <ul className="currently">
                <li>Chance of rain: 86%</li>
                <li>Humidity: 75%</li>
                <li>Wind: 10 m/s</li>
              </ul>
            </div>
          </div>
          <br />

          <div className="row">
            <div className="col-2 today-hours currently" id="hour-one">
              14:00
              <br />
              🌧 3°
            </div>
            <div className="col-2 today-hours currently" id="hour-two">
              15:00
              <br />
              🌨 3°
            </div>
            <div className="col-2 today-hours currently" id="hour-three">
              16:00
              <br />
              🌨 3°
            </div>
            <div className="col-2 today-hours currently" id="hour-four">
              17:00
              <br />
              🌨 2°
            </div>
            <div className="col-2 today-hours currently" id="hour-five">
              18:00
              <br />
              🌨 2°
            </div>
            <div className="col-2 today-hours currently" id="hour-six">
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
