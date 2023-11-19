const list = [];
export const showWeather = async (selector) => {
  document.body.append(selector);
  const input = document.createElement("input");
  input.placeholder = "Enter city";
  selector.append(input);
  const button = document.createElement("button");
  button.innerHTML = "Show weather";
  selector.append(button);
  const listHTML = document.createElement("ol");
  const showWeatherHTML = document.createElement("b");
  selector.append(listHTML);
  selector.append(showWeatherHTML);
  const key = "ab4639f5754271e773ed6d3ffd73f327";
  const buttonContainer = document.createElement("div");
  selector.append(buttonContainer);
  button.addEventListener("click", async () => {
    const value = input.value;
    const reject = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${value}&appid=${key}`,
    );
    const weather = await reject.json();
    input.value = "";
    let temp = weather.main.temp;
    let nameCity = weather.name;
    list.push({ temp, nameCity });
    showWeatherHTML.innerHTML = `${weather.main.temp}`;
    await addButton(buttonContainer);
  });
};
export const addButton = (selector) => {
  selector.innerHTML = `<ul>${list
    .map((el) => `<li><button>${el.nameCity}</button></li>`)
    .join("")}</ul>`;
};
