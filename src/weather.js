const list = [];
const city = [];
const key = "ab4639f5754271e773ed6d3ffd73f327";
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
  const buttonContainer = document.createElement("div");
  selector.append(buttonContainer);
  button.addEventListener("click", async () => {
    const value = input.value;
    const weather = await getAndShowWeather(value, showWeatherHTML);
    input.value = "";
    let temp = weather.main.temp;
    let nameCity = weather.name;
    let icon = weather.weather[0].icon;
    list.unshift({ temp, nameCity, icon });
    city.push(nameCity);
    // console.log(city,city.includes(value))
    // if(!city.includes(value)){
    //     addButton(buttonContainer,showWeatherHTML);
    // }
    addButton(buttonContainer, showWeatherHTML);
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
  button.innerHTML = list[0].nameCity;
  selector.append(button);
  showWeatherCityButton(button, showWeatherHTML);
};
export const showWeatherCityButton = (selector, showWeatherHTML) => {
  selector.addEventListener("click", async () => {
    for (let i = 0; i < list.length; i++) {
      if (selector.innerHTML === list[i].nameCity) {
        await getAndShowWeather(list[i].nameCity, showWeatherHTML);
      }
    }
  });
};
