import { showAllButtons } from "./button.js";
import { readList } from "./storage.js";
import { showWeatherAndMapInSelector } from "./showWeatherAndMapInSelector.js";
import { addInfoToList, addInfoToListFirstLaunch } from "./addInfoToList.js";
import {
  showWeatherHTML,
  buttonContainer,
  lastClickCityKey,
  storageKey,
} from "./library.js";
export const showWeather = async (selector) => {
  document.body.append(selector);
  const map = document.createElement("div");
  map.id = "map";
  const input = document.createElement("input");
  input.placeholder = "Enter city";
  selector.append(input);
  const button = document.createElement("button");
  button.innerHTML = "Show weather";
  selector.append(button);
  const listHTML = document.createElement("ol");
  selector.append(listHTML);
  showWeatherHTML.append(map);
  selector.append(showWeatherHTML);
  selector.append(buttonContainer);
  const list = await readList(storageKey);
  const lastClickCity = await readList(lastClickCityKey);
  if (list.length !== 0) {
    if (lastClickCity.length !== 0) {
      showWeatherAndMapInSelector(lastClickCity, showWeatherHTML);
      showAllButtons(showWeatherHTML, list);
    } else {
      showWeatherAndMapInSelector(list[0].nameCity, showWeatherHTML);
      showAllButtons(showWeatherHTML, list);
    }
  } else {
    const userCity = fetch("https://get.geojs.io/v1/ip/geo.json")
      .then((ip) => ip.json())
      .then((userCity) => userCity.city);
    addInfoToListFirstLaunch(await userCity, showWeatherHTML, list);
  }
  button.addEventListener("click", async () => {
    const value = input.value;
    input.value = "";
    await addInfoToList(value, showWeatherHTML, list);
  });
};
