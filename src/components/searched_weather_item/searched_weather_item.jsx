import moment from "moment";
import React, { memo } from "react";
import styles from "./searched_weather_item.module.css";

const SearchedWeatherItem = ({ weather, unit }) => {
  const tempCels = Math.round(weather.main.temp);
  const tempFah = Math.round((tempCels * 9) / 5 + 32);

  return (
    <li className={styles.weather}>
      <div>
        <p className={styles.day}>{moment(weather.dt_txt).format("dddd")}</p>
        <p className={styles.date}>{moment(weather.dt_txt).format("MMM Do")}</p>
        <p className={styles.time}>
          {moment(weather.dt_txt).format("h:mm:ss a")}
        </p>
        <p className={styles.temp}>
          <span>Temp</span>{" "}
          {unit === "celsius" ? tempCels + "°C" : tempFah + "°F"}
        </p>
        <img
          className={styles.icon}
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].icon}
        />
        <p className={styles.main}>{weather.weather[0].main}</p>
        {/* {weather.rain && <p className={styles.rain}>{weather.rain}mm</p>}
        {weather.snow && <p className={styles.rain}>{weather.snow}mm</p>} */}
      </div>
      <ul className={styles.details}>
        <li>Wind {weather.wind.speed} m/s</li>
        <li>Visibility {weather.visibility * 0.001}km</li>
        <li>Humidity {weather.main.humidity} %</li>
        <li>Pressure {weather.main.pressure} hPa</li>
      </ul>
    </li>
  );
};

export default memo(SearchedWeatherItem);
