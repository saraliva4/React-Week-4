import axios from "axios";
import "./DailyForecast.css";

export default function DailyForecast() {
  return (
    <div className="DailyForecast">
      <div className="monday card mt-4">
        <div className="card-body">
          <h5 className="card-title" id="weekday-one">
            Monday
          </h5>
          <h6 className="card-subtitle mb-2 text-muted" id="date-one">
            January 23rd
          </h6>
        </div>
        <div className="row">
          <div className="col-6 weather">
            <span className="weather-emoji m-2">🌧</span>
            <span className="weather-forecast">Rain</span>
          </div>
          <div className="col-6 temperature">4°/1°</div>
        </div>
      </div>

      <div className="tuesday card mt-4">
        <div className="card-body">
          <h5 className="card-title" id="weekday-two">
            Tuesday
          </h5>
          <h6 className="card-subtitle mb-2 text-muted" id="date-two">
            January 24th
          </h6>
        </div>
        <div className="row">
          <div className="col-6 weather">
            <span className="weather-emoji m-2">🌨</span>
            <span className="weather-forecast">Snow</span>
          </div>
          <div className="col-6 temperature">4°/2°</div>
        </div>
      </div>

      <div className="wednesday card mt-4">
        <div className="card-body">
          <h5 className="card-title" id="weekday-three">
            Wednesday
          </h5>
          <h6 className="card-subtitle mb-2 text-muted" id="date-three">
            January 25th
          </h6>
        </div>
        <div className="row">
          <div className="col-6 weather">
            <span className="weather-emoji m-2">🌧</span>
            <span className="weather-forecast">Rain</span>
          </div>
          <div className="col-6 temperature">2°/1°</div>
        </div>
      </div>

      <div className="thursday card mt-4">
        <div className="card-body">
          <h5 className="card-title" id="weekday-four">
            Thursday
          </h5>
          <h6 className="card-subtitle mb-2 text-muted" id="date-four">
            January 26th
          </h6>
        </div>
        <div className="row">
          <div className="col-6 weather">
            <span className="weather-emoji m-2">🌧</span>
            <span className="weather-forecast">Rain</span>
          </div>
          <div className="col-6 temperature">3°/0°</div>
        </div>
      </div>

      <div className="friday card mt-4">
        <div className="card-body">
          <h5 className="card-title" id="weekday-five">
            Friday
          </h5>
          <h6 className="card-subtitle mb-2 text-muted" id="date-five">
            January 27th
          </h6>
        </div>
        <div className="row">
          <div className="col-6 weather">
            <span className="weather-emoji m-2">🌧</span>
            <span className="weather-forecast">Rain</span>
          </div>
          <div className="col-6 temperature">5°/4°</div>
        </div>
      </div>

      <div className="saturday card mt-4">
        <div className="card-body">
          <h5 className="card-title" id="weekday-six">
            Saturday
          </h5>
          <h6 className="card-subtitle mb-2 text-muted" id="date-six">
            January 28th
          </h6>
        </div>
        <div className="row">
          <div className="col-6 weather">
            <span className="weather-emoji m-2">☁️</span>
            <span className="weather-forecast">Overcast</span>
          </div>
          <div className="col-6 temperature">5°/1°</div>
        </div>
      </div>

      <div className="sunday card mt-4">
        <div className="card-body">
          <h5 className="card-title" id="weekday-seven">
            Sunday
          </h5>
          <h6 className="card-subtitle mb-2 text-muted" id="date-seven">
            January 29th
          </h6>
        </div>
        <div className="row">
          <div className="col-6 weather">
            <span className="weather-emoji m-2">🌨</span>
            <span className="weather-forecast">Snow</span>
          </div>
          <div className="col-6 temperature">-1°/-3°</div>
        </div>
      </div>
    </div>
  );
}
