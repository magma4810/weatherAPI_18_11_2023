import { getWeather } from "./getWeather.js";

export const showWeatherInSelector = async (city, selector) => {
  const weather = await getWeather(city);
  selector.innerHTML = `${`Погода в ${weather.name} ${
    weather.main.temp
  }˚<img src = 
      ${`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}>`}`;
  return weather;
};
