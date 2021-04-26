import styles from "./weather_current.module.css";
import { Wind } from "react-bootstrap-icons";
import { Moisture } from "react-bootstrap-icons";
import { Eye } from "react-bootstrap-icons";
import { ThermometerHalf } from "react-bootstrap-icons";

const WeatherCurrent = ({ unit, weather, currentWeather }) => {
  const cels = Math.round(weather.temp);
  const fah = Math.round((cels * 9) / 5 + 32);
  const feelsLikecels = Math.round(weather.feels_like);
  const feelsLikefah = Math.round((cels * 9) / 5 + 32);

  return (
    <section className={styles.weatherCurrent}>
      <div className={styles.weatherIcon}>
        <img
          className={styles.icon}
          src={`https://www.openweathermap.org/img/wn/${currentWeather.icon}@2x.png`}
          alt=""
        />
        <p>{currentWeather.description}</p>
      </div>
      <div className={styles.temp}>
        <h1>
          {unit === "celsius" ? cels : fah}
          {unit === "celsius" ? <span>°C</span> : <span>°F</span>}
        </h1>
        <p>Feels like {unit === "celsius" ? feelsLikecels : feelsLikefah}°</p>
      </div>
      <div className={styles.details}>
        <ul>
          <li>
            <span className={styles.listIcon}>
              <Wind />
            </span>
            <p>Wind {weather.wind_speed}m/s</p>
          </li>
          <li>
            <span className={styles.listIcon}>
              <Eye />
            </span>
            <p>Visibility {weather.visibility * 0.001}km</p>
          </li>
          <li>
            <span className={styles.listIcon}>
              <Moisture />
            </span>
            <p>Humidity {weather.humidity}%</p>
          </li>
          <li>
            <span className={styles.listIcon}>
              <ThermometerHalf />
            </span>
            <p>Pressure {weather.pressure}hPa</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default WeatherCurrent;
