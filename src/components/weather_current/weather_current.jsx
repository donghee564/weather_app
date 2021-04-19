import styles from "./weather_current.module.css";
import { CloudSun } from "react-bootstrap-icons";

const WeatherCurrent = ({ weather, currentWeather }) => {
  return (
    <section className={styles.weatherCurrent}>
      <div>
        <CloudSun />
      </div>
      <div>
        <h1>
          {weather.temp}
          <sup>o</sup>C
        </h1>
        <p>Feels like {weather.feels_like}</p>
        <p>
          {currentWeather.main} {currentWeather.description}
        </p>
      </div>
      <div>
        <h3>MORE DETAILS</h3>
        <ul>
          <li>Wind speed {weather.wind_speed} m/s</li>
          <li>Visibility {weather.visibility} meters</li>
          <li>Humidity {weather.humidity} %</li>
          <li>Pressure {weather.pressure} hPa</li>
        </ul>
      </div>
    </section>
  );
};

export default WeatherCurrent;
