import { getWeather } from "./getWeather.js";
import { initMap } from "./ymaps.js";

export const showWeatherAndMapInSelector = async (city) => {
  const weather = await getWeather(city);
  const userCity = fetch(
    `https://geocode-maps.yandex.ru/1.x/?apikey=96aaccbc-e728-4c64-bcf3-ba18bc4c3d20&geocode=${city}&format=json`,
  )
    .then((geo) => geo.json())
    .then((g) => g.response)
    .then((g) => g.GeoObjectCollection)
    .then((g) => g.featureMember[0])
    .then((g) => g.GeoObject)
    .then((g) => g.Point)
    .then((g) => g.pos);
  document.querySelector("#map").innerHTML =
    `${`Погода в ${weather.name} ${weather.main.temp}˚
    <img src = https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png>`}`;
  initMap((await userCity).split(" ").map((el) => Number(el)));
  return weather;
};
