import { showWeatherAndMapInSelector } from "./showWeatherAndMapInSelector.js";
import { saveList } from "./storage.js";
import { lastClickCityKey } from "./library.js";

export const showWeatherCityButton = (selector, showWeatherHTML) => {
  selector.addEventListener("click", async () => {
    await showWeatherAndMapInSelector(selector.innerHTML, showWeatherHTML);
    saveList(lastClickCityKey, selector.innerHTML);
  });
};
