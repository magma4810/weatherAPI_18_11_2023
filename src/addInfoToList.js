import { addButton } from "./button.js";
import { saveList } from "./storage.js";
import { storageKey, lastClickCityKey, buttonContainer } from "./library.js";
import { showWeatherInSelector } from "./showWeatherInSelector.js";

export const addInfoToList = async (value, showWeatherHTML, list) => {
  const weather = await showWeatherInSelector(value, showWeatherHTML);
  let temp = weather.main.temp;
  let nameCity = weather.name;
  let icon = weather.weather[0].icon;
  list.push({ temp, nameCity, icon });
  addButton(buttonContainer, showWeatherHTML, list);
  saveList(lastClickCityKey, nameCity);
  saveList(storageKey, list);
};
