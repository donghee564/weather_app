import React from "react";
import WeatherItem from "../weather_item/weather_item";
import styles from "./weather_list.module.css";

const WeatherList = ({ weathersList }) => (
  <ul className={styles.weatherList}>
    {weathersList.map((weather) => (
      <WeatherItem weather={weather} key={weather.dt} />
    ))}
  </ul>
);

export default WeatherList;
