import moment from "moment";
import React, { memo } from "react";
import styles from "./weather_item.module.css";

const WeatherItem = ({ weather, unit }) => {
  const minCels = Math.round(weather.temp.min);
  const minFah = Math.round((minCels * 9) / 5 + 32);
  const maxCels = Math.round(weather.temp.max);
  const maxFah = Math.round((maxCels * 9) / 5 + 32);

  // moment를 이용한 dt data 변환
  let date = new Date();
  const day = weather.dt * 1000;
  date.setTime(day);

  return (
    <li className={styles.weather}>
      <p className={styles.day}>{moment(date).format("dddd")}</p>
      <p className={styles.date}>{moment(date).format("MMM Do")}</p>
      <p className={styles.temp}>
        <span>Min</span> {unit === "celsius" ? minCels + "°C" : minFah + "°F"}
      </p>
      <p className={styles.temp}>
        <span>Max</span> {unit === "celsius" ? maxCels + "°C" : maxFah + "°F"}
      </p>
      <img
        className={styles.icon}
        src={`https://www.openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt={weather.weather[0].icon}
      />
      <p className={styles.main}>{weather.weather[0].main}</p>
      {weather.rain && <p className={styles.rain}>{weather.rain}mm</p>}
      {weather.snow && <p className={styles.rain}>{weather.snow}mm</p>}
    </li>
  );
};

export default memo(WeatherItem);
