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
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=${this.key}&units=metric`,
      this.getRequestOptions
    );
    const result = await response.json();
    return result;
  }

  async searchWeather(query) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=${this.key}&units=metric`,
      this.getRequestOptions
    );
    const result = await response.json();
    return result;
  }
}

export default OpenWeather;
