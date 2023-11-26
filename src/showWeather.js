import { showAllButtons } from "./button.js";
import { readList } from "./storage.js";
import { showWeatherInSelector } from "./showWeatherInSelector.js";
import { addInfoToList } from "./addInfoToList.js";
import {
  showWeatherHTML,
  buttonContainer,
  lastClickCityKey,
  storageKey,
} from "./library.js";
export const showWeather = async (selector) => {
  document.body.append(selector);
  const input = document.createElement("input");
  input.placeholder = "Enter city";
  selector.append(input);
  const button = document.createElement("button");
  button.innerHTML = "Show weather";
  selector.append(button);
  const listHTML = document.createElement("ol");
  selector.append(listHTML);
  selector.append(showWeatherHTML);
  selector.append(buttonContainer);
  const list = await readList(storageKey);
  const lastClickCity = await readList(lastClickCityKey);
  if (list.length !== 0) {
    if (lastClickCity.length !== 0) {
      showWeatherInSelector(lastClickCity, showWeatherHTML);
      showAllButtons(showWeatherHTML, list);
    } else {
      showWeatherInSelector(list[0].nameCity, showWeatherHTML);
      showAllButtons(showWeatherHTML, list);
    }
  } else {
    const userCity = fetch("https://get.geojs.io/v1/ip/geo.json")
      .then((ip) => ip.json())
      .then((userCity) => userCity.city);
    addInfoToList(await userCity, showWeatherHTML, list);
  }
  button.addEventListener("click", async () => {
    const value = input.value;
    input.value = "";
    await addInfoToList(value, showWeatherHTML, list);
  });
};
