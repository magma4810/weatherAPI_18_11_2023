const key = "ab4639f5754271e773ed6d3ffd73f327";
const showWeatherHTML = document.createElement("b");
const buttonContainer = document.createElement("div");
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
    const weather = await getAndShowWeather(value, showWeatherHTML);
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
export const getAndShowWeather = async (city, selector) => {
  const reject = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?units=metric&q=
        ${city}&appid=${key}`,
  );
  const weather = await reject.json();
  selector.innerHTML = `${`Погода в ${weather.name} ${
    weather.main.temp
  }˚<img src = 
    ${`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}>`}`;
  return weather;
};
export const addButton = (selector, showWeatherHTML) => {
  const button = document.createElement("button");
  button.innerHTML = list[list.length - 1].nameCity;
  selector.append(button);
  showWeatherCityButton(button, showWeatherHTML);
};
export const showWeatherCityButton = (selector, showWeatherHTML) => {
  selector.addEventListener("click", async () => {
    await getAndShowWeather(selector.innerHTML, showWeatherHTML);
    saveList(lastClickCityKey, selector.innerHTML);
  });
};
const storageKey = "items";
const lastClickCityKey = "lastCity";
export const saveList = (storageKey, items) => {
  localStorage.setItem(storageKey, JSON.stringify(items));
};
export const readList = async (storageKey) => {
  const data = localStorage.getItem(storageKey);
  return data === null ? [] : JSON.parse(data);
};
const list = await readList(storageKey);
const lastClickCity = await readList(lastClickCityKey);
export const showAllButtons = () => {
  for (let i = 0; i < list.length; i++) {
    const button = document.createElement("button");
    button.innerHTML = list[i].nameCity;
    buttonContainer.append(button);
    showWeatherCityButton(button, showWeatherHTML);
  }
};
if (list.length !== 0) {
  if (lastClickCity.length !== 0) {
    getAndShowWeather(lastClickCity, showWeatherHTML);
    showAllButtons();
  } else {
    getAndShowWeather(list[0].nameCity, showWeatherHTML);
    showAllButtons();
  }
}
