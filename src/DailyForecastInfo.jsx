export default function DailyForecastInfo(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°C`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°C`;
  }

  function day() {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let time = new Date(props.data.time * 1000);
    let day = time.getDay();

    return <div>{days[day]}</div>;
  }

  function month() {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let time = new Date(props.data.time * 1000);
    let month = time.getMonth();
    let date = time.getDate();

    return (
      <div>
        {months[month]} {date}
      </div>
    );
  }

  console.log(props.data);

  return (
    <div className="DailyForecastInfo">
      <div className="card-body">
        <h5 className="card-title">{day()}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{month()}</h6>
      </div>
      <div className="row">
        <div className="col-6 weather">
          <span className="weather-emoji">
            <img
              className="pb-2"
              src={props.data.condition.icon_url}
              alt={props.data.condition.description}
            />
          </span>
          <span className="weather-forecast">Rain</span>
        </div>
        <div className="col-6 temperature">
          {maxTemperature()} / {minTemperature()}
        </div>
      </div>
    </div>
  );
}
