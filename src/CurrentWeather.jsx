import axios from "axios";
import "./CurrentWeather.css";

export default function CurrentWeather() {
  return (
    <div className="CurrentWeather">
      <div className="today card">
        <div className="card-body p-5">
          <h1 className="card-title" id="current-location">
            Tromsø, Norway
          </h1>
          <h6 className="card-subtitle mt-3 mb-5 text-muted" id="date-zero">
            January 22nd
          </h6>
          <div className="row align-items-center">
            <div className="col-6 text-end pe-5">
              <h4 className="card-text">Current temperature</h4>
              <div>
                <span className="current-degrees-emoji m-2">🌧</span>
                <span className="current-degrees" id="current-degrees">
                  3
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
                <li>Chance of rain: 86%</li>
                <li>Humidity: 75%</li>
                <li>Wind: 10 m/s</li>
              </ul>
            </div>
          </div>
          <br />

          <div className="d-none d-md-flex justify-content-evenly mt-3">
            <div className="today-hours" id="hour-one">
              14:00
              <br />
              🌧 3°
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
}
