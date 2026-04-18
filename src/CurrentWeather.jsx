import FormattedDate from "./FormattedDate";
import Temperature from "./Temperature";
import "./CurrentWeather.css";

export default function CurrentWeather(props) {
  return (
    <div className="CurrentWeather">
      <div className="today card">
        <div className="card-body p-5">
          <h1 className="card-title" id="current-location">
            {props.weatherData.city}, {props.weatherData.country}
          </h1>
          <h6 className="card-subtitle mt-3 mb-5 text-muted" id="date-zero">
            <FormattedDate date={props.weatherData.date} />
          </h6>
          <div className="row align-items-center mb-5">
            <div className="col-6 text-end pe-5">
              <h4 className="card-text">Current temperature</h4>
              <div>
                <span className="current-degrees-emoji m-2">🌪</span>
                <Temperature celsius={props.weatherData.temperature} />
              </div>
            </div>
            <div className="col-6 ps-4 pt-4 border-start">
              <ul>
                <li>Feels like: {Math.round(props.weatherData.feelsLike)}°</li>
                <li>Humidity: {Math.round(props.weatherData.humidity)}%</li>
                <li>Wind: {Math.round(props.weatherData.wind)}m/s</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
