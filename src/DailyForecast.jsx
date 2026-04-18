import React, { useState, useEffect } from "react";
import axios from "axios";
import "./DailyForecast.css";
import DailyForecastInfo from "./DailyForecastInfo";

export default function DailyForecast(props) {
  const [forecastData, setForecastData] = useState(null);
  const [ready, setReady] = useState(false);

  function handleResponse(response) {
    console.log(response.data);
    setForecastData(response.data.daily);
    setReady(true);
  }

  useEffect(() => {
    if (!props.coordinates) return;

    let unit = "metric";
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;

    let url = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=02f8a7tad0e0efa9c2364cdececoab3a&units=${unit}`;

    axios.get(url).then(handleResponse);
  }, [props.coordinates]);

  if (ready) {
    return (
      <div className="DailyForecast">
        {forecastData.map(function (forecast, index) {
          if (index > 0 && index < 6) {
            return (
              <div className="card mt-4" key={index}>
                <DailyForecastInfo data={forecast} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    return null;
  }
}
