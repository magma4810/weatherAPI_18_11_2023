import { showWeatherAndMapInSelector } from "./showWeatherAndMapInSelector.js";
import { saveList } from "./storage.js";
import { lastClickCityKey } from "./library.js";

// const deleteButton = document.createElement('button');
// deleteButton.innerHTML = 'X';

export const showWeatherCityButton = (selector, showWeatherHTML) => {
  selector.addEventListener("click", async () => {
    await showWeatherAndMapInSelector(selector.innerHTML, showWeatherHTML);
    saveList(lastClickCityKey, selector.innerHTML);
  });
};
