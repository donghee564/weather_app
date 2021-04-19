class OpenWeather {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }

  async currPosWeather(lat, lon) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=692a85216ddc26645348b85ebe3a6052&units=metric`,
      this.getRequestOptions
    );
    const result = await response.json();
    return result;
  }
}

export default OpenWeather;
