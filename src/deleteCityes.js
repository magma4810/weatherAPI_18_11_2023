// import { addInfoToListFirstLaunch } from "./addInfoToList.js";
// import { storageKey } from "./library.js";
// import { readList } from "./storage.js";
// import { showAllButtons } from "./button.js";
// import { showWeather } from "./showWeather.js";

export async function deleteCityes() {
  document
    .querySelector(".clearStorage")
    .addEventListener("click", async () => {
      localStorage.clear();
      // const buttonContainer = document.querySelector('#buttonContainer')
      document.querySelector("#weather").remove();
      location.reload();
      // const list = await readList(storageKey);
      // console.log(list)
      // await addInfoToListFirstLaunch(showWeatherHTML,await list);
      // showAllButtons(showWeatherHTML,await list);
    });
}
