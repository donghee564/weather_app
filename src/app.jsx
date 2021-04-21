import { useCallback, useEffect, useState } from "react";
import WeatherList from "./components/weather_list/weather_list";
import styles from "./app.module.css";
import WeatherCurrent from "./components/weather_current/weather_current";
import Header from "./components/header/header";
import SearchedWeatherList from "./components/searched_weather_list/searched_weather_list";

function App({ openWeather }) {
  const [weathers, setWeathers] = useState({
    timezone: "",
    current: {},
    daily: [],
    currentWeather: {},
  });

  const [searchWeather, setSearchWeather] = useState({
    list: [],
    city: {},
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

  const handleSearch = useCallback(
    (query) => {
      openWeather
        .searchWeather(query) //
        .then((result) => {
          const dailyWeather = result.list.filter((item) =>
            item.dt_txt.includes("18:00:00")
          );
          setSearchWeather({
            list: dailyWeather,
            city: result.city,
          });
        })
        .catch(() => alert("Please enter a valid city name"));
    },
    [openWeather]
  );

  return (
    <div className={styles.app}>
      <Header
        onSearch={handleSearch}
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
      {searchWeather.city.name && (
        <SearchedWeatherList
          city={searchWeather.city}
          list={searchWeather.list}
          unit={unit}
          current={weathers.current}
        />
      )}
    </div>
  );
}

export default App;
