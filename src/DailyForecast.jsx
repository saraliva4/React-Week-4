import React from "react";
import axios from "axios";
import "./DailyForecast.css";

export default function DailyForecast() {
  return (
    <div className="DailyForecast">
      <div className="monday next-week card" style="width: 30rem">
        <div className="next-week card-body">
          <h5 className="next-week card-title" id="weekday-one">
            Monday
          </h5>
          <h6 className="next-week card-subtitle mb-2 text-muted" id="date-one">
            January 23rd
          </h6>
        </div>
        <div className="row">
          <div className="col-6 next-week weather">
            <span className="next-week weather-emoji">🌧</span>
            <span className="next-week weather-forecast">Rain</span>
          </div>
          <div className="col-6 next-week temperature">4°/1°</div>
        </div>
      </div>

      <br />
      <div className="tuesday next-week card" style="width: 30rem">
        <div className="next-week card-body">
          <h5 className="next-week card-title" id="weekday-two">
            Tuesday
          </h5>
          <h6 className="next-week card-subtitle mb-2 text-muted" id="date-two">
            January 24th
          </h6>
        </div>
        <div className="row">
          <div className="col-6 next-week weather">
            <span className="next-week weather-emoji">🌨</span>
            <span className="next-week weather-forecast">Snow</span>
          </div>
          <div className="col-6 next-week temperature">4°/2°</div>
        </div>
      </div>

      <br />

      <div className="wednesday next-week card" style="width: 30rem">
        <div className="next-week card-body">
          <h5 className="next-week card-title" id="weekday-three">
            Wednesday
          </h5>
          <h6
            className="next-week card-subtitle mb-2 text-muted"
            id="date-three"
          >
            January 25th
          </h6>
        </div>
        <div className="row">
          <div className="col-6 next-week weather">
            <span className="next-week weather-emoji">🌧</span>
            <span className="next-week weather-forecast">Rain</span>
          </div>
          <div className="col-6 next-week temperature">2°/1°</div>
        </div>
      </div>

      <br />

      <div className="thursday next-week card" style="width: 30rem">
        <div className="next-week card-body">
          <h5 className="next-week card-title" id="weekday-four">
            Thursday
          </h5>
          <h6
            className="next-week card-subtitle mb-2 text-muted"
            id="date-four"
          >
            January 26th
          </h6>
        </div>
        <div className="row">
          <div className="col-6 next-week weather">
            <span className="next-week weather-emoji">🌧</span>
            <span className="next-week weather-forecast">Rain</span>
          </div>
          <div className="col-6 next-week temperature">3°/0°</div>
        </div>
      </div>

      <br />

      <div className="friday next-week card" style="width: 30rem">
        <div className="next-week card-body">
          <h5 className="next-week card-title" id="weekday-five">
            Friday
          </h5>
          <h6
            className="next-week card-subtitle mb-2 text-muted"
            id="date-five"
          >
            January 27th
          </h6>
        </div>
        <div className="row">
          <div className="col-6 next-week weather">
            <span className="next-week weather-emoji">🌧</span>
            <span className="next-week weather-forecast">Rain</span>
          </div>
          <div className="col-6 next-week temperature">5°/4°</div>
        </div>
      </div>

      <br />

      <div className="saturday next-week card" style="width: 30rem">
        <div className="next-week card-body">
          <h5 className="next-week card-title" id="weekday-six">
            Saturday
          </h5>
          <h6 className="next-week card-subtitle mb-2 text-muted" id="date-six">
            January 28th
          </h6>
        </div>
        <div className="row">
          <div className="col-6 next-week weather">
            <span className="next-week weather-emoji">☁️</span>
            <span className="next-week weather-forecast">Overcast</span>
          </div>
          <div className="col-6 next-week temperature">5°/1°</div>
        </div>
      </div>

      <br />

      <div className="sunday next-week card" style="width: 30rem">
        <div className="next-week card-body">
          <h5 className="next-week card-title" id="weekday-seven">
            Sunday
          </h5>
          <h6
            className="next-week card-subtitle mb-2 text-muted"
            id="date-seven"
          >
            January 29th
          </h6>
        </div>
        <div className="row">
          <div className="col-6 next-week weather">
            <span className="next-week weather-emoji">🌨</span>
            <span className="next-week weather-forecast">Snow</span>
          </div>
          <div className="col-6 next-week temperature">-1°/-3°</div>
        </div>
      </div>
    </div>
  );
}
