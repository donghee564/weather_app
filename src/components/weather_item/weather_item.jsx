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
      <h4>{moment(date).format("dddd")}</h4>
      <p>{moment(date).format("MMM Do")}</p>
      <p>
        온도 {weather.temp.day} <sup>o</sup>C
      </p>
      <h5>날씨 {weather.weather[0].main}</h5>
      {weather.rain && <p>강수량 {weather.rain}</p>}
    </li>
  );
};

export default WeatherItem;
