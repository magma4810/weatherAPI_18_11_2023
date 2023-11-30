import { showAllButtons } from "./button.js";
import { readList } from "./storage.js";
import { showWeatherAndMapInSelector } from "./showWeatherAndMapInSelector.js";
import { addInfoToList, addInfoToListFirstLaunch } from "./addInfoToList.js";
import { deleteCityes } from "./deleteCityes.js";
import {
  showWeatherHTML,
  buttonContainer,
  lastClickCityKey,
  storageKey,
} from "./library.js";
const clearStorage = document.createElement("button");
clearStorage.innerHTML = "Clear";
clearStorage.className = "clearStorage";
document.body.append(clearStorage);
export const showWeather = async (selector) => {
  document.body.append(selector);
  const map = document.createElement("div");
  map.id = "map";
  map.className = "map";
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
      await showAllButtons(showWeatherHTML, list);
    } else {
      showWeatherAndMapInSelector(
        list[list.length - 1].nameCity,
        showWeatherHTML,
      );
      await showAllButtons(showWeatherHTML, list);
    }
  } else {
    addInfoToListFirstLaunch(showWeatherHTML, list);
  }
  deleteCityes();
  const cityes = [];
  button.addEventListener("click", async () => {
    const value = input.value;
    input.value = "";

    for (let i = 0; i < list.length; i++) {
      cityes.push(list[i].nameCity);
    }
    if (!cityes.includes(value)) {
      await addInfoToList(value, showWeatherHTML, list);
    } else {
      await showWeatherAndMapInSelector(value);
    }
  });
};
