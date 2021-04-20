import moment from "moment";
import React from "react";
import styles from "./weather_item.module.css";

const WeatherItem = ({ weather }) => {
  // moment를 이용한 dt data 변환
  let date = new Date();
  const day = weather.dt * 1000;
  date.setTime(day);

  return (
    <li className={styles.weather}>
      <p className={styles.day}>{moment(date).format("dddd")}</p>
      <p className={styles.date}>{moment(date).format("MMM Do")}</p>
      <p className={styles.temp}>
        <span>Min</span> {weather.temp.min} <sup>o</sup>C
      </p>
      <p className={styles.temp}>
        <span>Max</span> {weather.temp.max} <sup>o</sup>C
      </p>
      <img
        className={styles.icon}
        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
      />
      <p className={styles.main}>{weather.weather[0].main}</p>
      {weather.rain && <p className={styles.rain}>{weather.rain}mm</p>}
      {weather.snow && <p className={styles.rain}>{weather.snow}mm</p>}
    </li>
  );
};

export default WeatherItem;
