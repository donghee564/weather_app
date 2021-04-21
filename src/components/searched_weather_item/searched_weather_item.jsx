import moment from "moment";
import React from "react";
import styles from "../weather_item/weather_item.module.css";

const SearchedWeatherItem = ({ weather, unit }) => {
  const tempCels = Math.round(weather.main.temp);
  const tempFah = Math.round((tempCels * 9) / 5 + 32);

  // moment를 이용한 dt data 변환
  let date = new Date();
  const day = weather.dt * 1000;
  date.setTime(day);

  return (
    <li className={styles.weather}>
      <p className={styles.day}>{moment(date).format("dddd")}</p>
      <p className={styles.date}>{moment(date).format("MMM Do")}</p>
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
    </li>
  );
};

export default SearchedWeatherItem;
