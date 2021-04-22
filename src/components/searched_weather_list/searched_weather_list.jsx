import React from "react";
import moment from "moment";
import SearchedWeatherItem from "../searched_weather_item/searched_weather_item";
import styles from "./searched_weather_list.module.css";

const SearchedWeatherList = ({ city, list, unit }) => {
  const timezoneInMin = city.timezone / 60;

  return (
    <>
      <h1 className={styles.title}>
        {city.country} / {city.name}
      </h1>
      <p className={styles.date}>
        {moment().utcOffset(timezoneInMin).format("dddd")},{" "}
        {moment().utcOffset(timezoneInMin).format("MMM Do")}
      </p>
      <p className={styles.subTitle}>5-Day Forecast</p>
      <ul className={styles.weatherList}>
        {list.map((weather) => (
          <SearchedWeatherItem weather={weather} key={weather.dt} unit={unit} />
        ))}
      </ul>
    </>
  );
};

export default SearchedWeatherList;
