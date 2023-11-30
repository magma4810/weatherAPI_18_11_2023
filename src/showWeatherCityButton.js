import { showWeatherAndMapInSelector } from "./showWeatherAndMapInSelector.js";
import { saveList } from "./storage.js";
import { lastClickCityKey } from "./library.js";

// const deleteButton = document.createElement('button');
// deleteButton.innerHTML = 'X';

export const showWeatherCityButton = async (city, showWeatherHTML) => {
  //   selector.addEventListener("click", async () => {
  await showWeatherAndMapInSelector(city, showWeatherHTML);
  saveList(lastClickCityKey, city);
  //   });
};
