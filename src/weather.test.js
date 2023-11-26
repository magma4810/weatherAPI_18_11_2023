import { showWeather } from "./showWeather";

describe("sample Weather", () => {
  let div;
  let button;
  let input;
  beforeEach(async () => {
    div = document.createElement("div");
    await showWeather(div);
    button = div.querySelector("button");
    input = div.querySelector("input");
  });
  it("show input and button", () => {
    expect(button).toBeTruthy();
    expect(input).toBeTruthy();
    expect(button.innerHTML).toBe("Show weather");
  });
});
