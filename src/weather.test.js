import { showWeather } from "./weather.js";

describe("sample Weather", () => {
  let div;
  let button;
  let input;
  beforeEach(() => {
    div = document.createElement("div");
    showWeather(div);
    button = div.querySelector("button");
    input = div.querySelector("input");
  });
  it("show input and button", () => {
    expect(button).toBeTruthy();
    expect(input).toBeTruthy();
    expect(button.innerHTML).toBe("Show weather");
  });
});
