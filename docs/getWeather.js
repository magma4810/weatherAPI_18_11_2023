import { key } from "./library.js";

export const getWeather = async (city) => {
  const reject = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?units=metric&q=
          ${city}&appid=${key}`,
  );
  const weather = await reject.json();
  return weather;
};
