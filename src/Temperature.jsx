import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <span className="Temperature">
        <span className="current-degrees">{Math.round(props.celsius)}</span>
        <span className="celsius-fahrenheit">
          °C |
          <a href="/" className="ms-1" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <span className="Temperature">
        <span className="current-degrees">{Math.round(fahrenheit)}</span>
        <span className="celsius-fahrenheit">
          <a href="/" className="me-1" onClick={showCelsius}>
            °C
          </a>
          | °F
        </span>
      </span>
    );
  }
}
