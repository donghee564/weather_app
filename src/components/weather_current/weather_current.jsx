import styles from "./weather_current.module.css";
import { CloudSun } from "react-bootstrap-icons";
import { Wind } from "react-bootstrap-icons";
import { Moisture } from "react-bootstrap-icons";
import { Eye } from "react-bootstrap-icons";
import { ThermometerHalf } from "react-bootstrap-icons";

const WeatherCurrent = ({ weather }) => {
  return (
    <section className={styles.weatherCurrent}>
      <div className={styles.weatherIcon}>
        <CloudSun />
        <p>{weather.weather[0].description}</p>
      </div>
      <div className={styles.temp}>
        <h1>
          {Math.floor(weather.temp)}
          <span>°C</span>
          <p></p>
        </h1>
        <p>Feels like {weather.feels_like}°</p>
      </div>
      <div className={styles.details}>
        <h3>MORE DETAILS</h3>
        <ul>
          <li>
            <Wind /> <p>Wind {weather.wind_speed}m/s</p>
          </li>
          <li>
            <Eye /> <p>Visibility {weather.visibility * 0.001}km</p>
          </li>
          <li>
            <Moisture /> <p>Humidity {weather.humidity}%</p>
          </li>
          <li>
            <ThermometerHalf /> <p>Pressure {weather.pressure}hPa</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default WeatherCurrent;
