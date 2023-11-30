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
export const showAllButtons = async (showWeatherHTML, list) => {
  buttonContainer.innerHTML = `<ul>${list
    .map(
      (city) =>
        `<li><button onclick = '${showWeatherCityButton(
          city.nameCity,
          showWeatherHTML,
        )}'>
        ${city.nameCity}</button></li>`,
    )
    .join("")}</ul>`;

  //   for (let i = 1; i < list.length+1; i++) {
  //     const li = document.createElement('li');
  //     const button = document.createElement("button");
  //     button.innerHTML = list[list.length - i].nameCity;
  //     li.append(button)
  //     console.log(li)
  //     buttonContainer.append(li);

  //     console.log(buttonContainer)
  //     showWeatherCityButton(button, showWeatherHTML);
  //   }
};
