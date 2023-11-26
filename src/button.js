import { showWeatherCityButton } from "./showWeatherCityButton.js";
import { buttonContainer } from "./library.js";

export const addButton = (selector, showWeatherHTML, list) => {
  const button = document.createElement("button");
  button.innerHTML = list[list.length - 1].nameCity;
  selector.append(button);
  showWeatherCityButton(button, showWeatherHTML);
};
export const showAllButtons = (showWeatherHTML, list) => {
  for (let i = 0; i < list.length; i++) {
    const button = document.createElement("button");
    button.innerHTML = list[i].nameCity;
    buttonContainer.append(button);
    showWeatherCityButton(button, showWeatherHTML);
  }
};
