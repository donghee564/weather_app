import { useCallback, useEffect, useState } from "react";
import WeatherList from "./components/weather_list/weather_list";
import styles from "./app.module.css";
import WeatherCurrent from "./components/weather_current/weather_current";
import Header from "./components/header/header";
import SearchedWeatherList from "./components/searched_weather_list/searched_weather_list";
import Raindrops from "./video/raindrops-comp.mp4";

function App({ openWeather }) {
  // 현재 위치의 날씨 정보
  const [weathers, setWeathers] = useState({
    timezone: "",
    current: {},
    daily: [],
    currentWeather: {},
  });
  // 검색한 도시의 날씨 정보
  const [searchWeather, setSearchWeather] = useState({
    list: [],
    city: {},
  });
  // 기온 단위
  const [unit, setUnit] = useState("celsius");

  const handleUnitChange = (event) => {
    setUnit(event.target.value);
  };
  // 현재 위치의 위도와 경도를 브라우저에서 받아와서 param에 넣고 api를 호출한다.
  useEffect(() => {
    // 위도 경도 값 받아왔을시 함수 실행
    const getGeoSuccess = (pos) => {
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;
      openWeather
        .currPosWeather(lat, lon) //현재 위치의 7일간의 daily 정보
        .then((result) => {
          setWeathers({
            timezone: result.timezone,
            current: result.current,
            daily: result.daily.splice(1), // 오늘 날씨 정보를 제외한 7일간의 날씨 정보를 daily 에 설정
            currentWeather: result.current.weather[0], // 현재 날짜의 날씨 정보만 currentWeather 에 설정
          });
        });
    };

    const getGeoError = () => {
      console.log("위치 정보를 찾을수 없습니다.");
    };

    navigator.geolocation.getCurrentPosition(getGeoSuccess, getGeoError); // 브라우저에서 위치정보 받아오기
  }, [openWeather]);

  // 검색 처리 함수
  const handleSearch = useCallback(
    (query) => {
      openWeather
        .searchWeather(query) //
        .then((result) => {
          const dailyWeather = result.list.filter(
            (item) => item.dt_txt.includes("18:00:00") // 받아온 데이터가 하루 3시간 간격이기때문에 하루중 오후 6시의 날씨만 가져옴
          );
          setSearchWeather({
            list: dailyWeather,
            city: result.city,
          });
        })
        .catch(() => alert("Please enter a valid city name")); //입력한 도시의 날씨 정보가 없을시.
    },
    [openWeather]
  );

  const handleClick = () => {
    // 검색한 도시의 날씨정보 닫기 버튼 클릭시 state 리셋
    setSearchWeather({
      list: [],
      city: {},
    });
  };

  // 검색한 도시의 이름이 있을시 날씨 정보 출력
  const showSearchedWeather = searchWeather.city.name && (
    <SearchedWeatherList
      onClick={handleClick}
      city={searchWeather.city}
      list={searchWeather.list}
      unit={unit}
    />
  );

  return (
    // 배경 영상
    <div className={styles.app}>
      <video className={styles.video} loop autoPlay muted>
        <source src={Raindrops} type="video/mp4" />
      </video>
      <section className={styles.weather}>
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
        {showSearchedWeather}
      </section>
    </div>
  );
}

export default App;
