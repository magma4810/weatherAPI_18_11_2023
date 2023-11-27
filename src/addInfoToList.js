import { addButton } from "./button.js";
import { saveList } from "./storage.js";
import { storageKey, lastClickCityKey, buttonContainer } from "./library.js";
import { showWeatherAndMapInSelector } from "./showWeatherAndMapInSelector.js";
import { getWeather } from "./getWeather.js";
import { initMap } from "./ymaps.js";
export const addInfoToList = async (value, showWeatherHTML, list) => {
  const weather = await showWeatherAndMapInSelector(value, showWeatherHTML);
  let temp = weather.main.temp;
  let nameCity = weather.name;
  let icon = weather.weather[0].icon;
  list.push({ temp, nameCity, icon });
  addButton(buttonContainer, showWeatherHTML, list);
  saveList(lastClickCityKey, nameCity);
  saveList(storageKey, list);
};

export const addInfoToListFirstLaunch = async (
  value,
  showWeatherHTML,
  list,
) => {
  const weather = await getWeather(value);
  document.querySelector("#map").innerHTML =
    `${`Погода в ${weather.name} ${weather.main.temp}˚
    <img src = https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png>`}`;
  const userCity = fetch("https://get.geojs.io/v1/ip/geo.json")
    .then((ip) => ip.json())
    .then((userCity) => [
      Number(userCity.longitude),
      Number(userCity.latitude),
    ]);
  initMap(await userCity);
  let temp = weather.main.temp;
  let nameCity = weather.name;
  let icon = weather.weather[0].icon;
  list.push({ temp, nameCity, icon });
  addButton(buttonContainer, showWeatherHTML, list);
  saveList(lastClickCityKey, nameCity);
  saveList(storageKey, list);
};
