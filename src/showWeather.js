import { addButton, showAllButtons } from "./button.js";
import { saveList } from "./storage.js";
import { showWeatherInSelector } from "./showWeatherInSelector.js";
import {
  showWeatherHTML,
  buttonContainer,
  lastClickCityKey,
  storageKey,
  list,
  lastClickCity,
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
  button.addEventListener("click", async () => {
    const value = input.value;
    const weather = await showWeatherInSelector(value, showWeatherHTML);
    input.value = "";
    let temp = weather.main.temp;
    let nameCity = weather.name;
    let icon = weather.weather[0].icon;
    list.push({ temp, nameCity, icon });
    addButton(buttonContainer, showWeatherHTML);
    saveList(lastClickCityKey, nameCity);
    saveList(storageKey, list);
  });
};
if (list.length !== 0) {
  if (lastClickCity.length !== 0) {
    showWeatherInSelector(lastClickCity, showWeatherHTML);
    showAllButtons(showWeatherHTML);
  } else {
    showWeatherInSelector(list[0].nameCity, showWeatherHTML);
    showAllButtons(showWeatherHTML);
  }
}
