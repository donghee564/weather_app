import { useEffect, useState } from "react";
import WeatherList from "./components/weather_list/weather_list";
import styles from "./app.module.css";
import WeatherCurrent from "./components/weather_current/weather_current";
import Header from "./components/header/header";

function App({ openWeather }) {
  const [weathers, setWeathers] = useState({
    timezone: "",
    current: {},
    daily: [],
    currentWeather: {},
  });

  const [unit, setUnit] = useState("celsius");

  const handleUnitChange = (event) => {
    setUnit(event.target.value);
  };

  useEffect(() => {
    const getGeoSuccess = (pos) => {
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;
      openWeather
        .currPosWeather(lat, lon) //
        .then((result) => {
          setWeathers({
            timezone: result.timezone,
            current: result.current,
            daily: result.daily.splice(1),
            currentWeather: result.current.weather[0],
          });
        });
    };

    const getGeoError = () => {
      console.log("위치 정보를 찾을수 없습니다.");
    };

    navigator.geolocation.getCurrentPosition(getGeoSuccess, getGeoError);
  }, [openWeather]);

  return (
    <div className={styles.app}>
      <Header
        handleUnitChange={handleUnitChange}
        timezone={weathers.timezone}
        current={weathers.current}
        unit={unit}
      />
      <WeatherCurrent
        unit={unit}
        weather={weathers.current}
        currentWeather={weathers.currentWeather}
      />
      <WeatherList unit={unit} weathersList={weathers.daily} />
    </div>
  );
}

export default App;
