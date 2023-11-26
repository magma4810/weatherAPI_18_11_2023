import { showWeatherCityButton } from "./showWeatherCityButton.js";
import { list, buttonContainer } from "./library.js";

export const addButton = (selector, showWeatherHTML) => {
  const button = document.createElement("button");
  button.innerHTML = list[list.length - 1].nameCity;
  selector.append(button);
  showWeatherCityButton(button, showWeatherHTML);
};
export const showAllButtons = (showWeatherHTML) => {
  for (let i = 0; i < list.length; i++) {
    const button = document.createElement("button");
    button.innerHTML = list[i].nameCity;
    buttonContainer.append(button);
    showWeatherCityButton(button, showWeatherHTML);
  }
};
