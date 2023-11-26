import { readList } from "./storage.js";

const key = "ab4639f5754271e773ed6d3ffd73f327";
const showWeatherHTML = document.createElement("b");
const buttonContainer = document.createElement("div");
const storageKey = "items";
const lastClickCityKey = "lastCity";
const list = await readList(storageKey);
const lastClickCity = await readList(lastClickCityKey);

export {
  key,
  showWeatherHTML,
  buttonContainer,
  storageKey,
  lastClickCityKey,
  list,
  lastClickCity,
};
