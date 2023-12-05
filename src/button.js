import { showWeatherCityButton } from "./showWeatherCityButton.js";
import { buttonContainer } from "./library.js";

export const addButton = (showWeatherHTML, list) => {
  const li = document.createElement("li");
  const button = document.createElement("button");
  button.innerHTML = list[list.length - 1].nameCity;
  li.append(button);
  buttonContainer.append(li);
  showWeatherCityButton(button, showWeatherHTML);
};
export const showAllButtons = (showWeatherHTML, list) => {
  for (let i = 0; i < list.length; i++) {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.innerHTML = list[i].nameCity;
    li.append(button);
    buttonContainer.append(li);
    showWeatherCityButton(button, showWeatherHTML);
  }
};
