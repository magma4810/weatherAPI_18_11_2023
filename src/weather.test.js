import { showWeather } from "./showWeather";
import "whatwg-fetch";
describe("sample Weather", () => {
  let div;
  let button;
  let input;
  let list;
  let clear;
  beforeEach(async () => {
    div = document.createElement("div");
    await showWeather(div);
    button = div.querySelector("button");
    input = div.querySelector("input");
    list = div.querySelector("ol");
    clear = document.body.querySelector(".clearStorage");
  });
  it("show input and button", () => {
    expect(button).toBeTruthy();
    expect(input).toBeTruthy();
    expect(button.innerHTML).toBe("Show weather");
  });
  it("check add list and clear button", () => {
    expect(list).toBeTruthy();
    expect(clear).toBeTruthy();
    expect(clear.className).toBe("clearStorage");
  });
});
