import { showWeather } from "./showWeather";
import { readList, saveList } from "./storage";
import { storageKey, lastClickCityKey } from "./library";
import { addButton } from "./button";
import { showWeatherHTML } from "./library";
import "whatwg-fetch";
describe("sample Weather", () => {
  let div, buttonDiv, buttonName, input, list, clear, listHTML, lastClickCity;
  beforeEach(async () => {
    div = document.createElement("div");
    await showWeather(div);
    buttonName = document.getElementById("buttonName");
    input = div.querySelector("input");
    listHTML = div.querySelector("ol");
    clear = document.body.querySelector(".clearStorage");
    list = await readList(storageKey);
    lastClickCity = await readList(lastClickCityKey);
    list.push({ temp: 3.18, nameCity: "Rome", icon: "01n" });
    saveList(storageKey, list);
    addButton(showWeatherHTML, list);
    buttonDiv = div.querySelector("button");
  });
  it("show input and button", () => {
    expect(buttonDiv).toBeTruthy();
    expect(input).toBeTruthy();
    expect(buttonDiv.innerHTML).toBe("Show weather");
  });
  it("check add list and clear button", () => {
    expect(listHTML).toBeTruthy();
    expect(clear).toBeTruthy();
    expect(clear.className).toBe("clearStorage");
    expect(clear.innerHTML).toBe("Clear");
  });
  it("work with localStorage", () => {
    expect(list.length).toBe(3);
    expect(lastClickCity.length).toBe(0);
  });
  it("add button name city", () => {
    expect(buttonName.innerHTML).toBe("Rome");
  });
});
