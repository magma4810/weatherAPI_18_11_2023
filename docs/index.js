import { showWeather } from "./showWeather.js";

const weather = document.createElement("div");
weather.id = "weather";

await showWeather(weather);
