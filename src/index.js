import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import OpenWeather from "./service/open-weather";

const openWeather = new OpenWeather(process.env.REACT_APP_OPENWEATHER_KEY);

ReactDOM.render(
  <React.StrictMode>
    <App openWeather={openWeather} />
  </React.StrictMode>,
  document.getElementById("root")
);
