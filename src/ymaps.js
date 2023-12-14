// import * as ymaps3 from "ymaps3";

export async function initMap(userCity) {
  // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
  await ymaps3.ready;

  const { YMap, YMapDefaultSchemeLayer } = ymaps3;
  // Иницилиазируем карту

  const map = new YMap(
    // Передаём ссылку на HTMLElement контейнера
    document.querySelector("#map"),

    // Передаём параметры инициализации карты
    {
      location: {
        // Координаты центра карты
        center: await userCity,

        // Уровень масштабирования
        zoom: 10,
      },
    },
  );

  // Добавляем слой для отображения схематической карты
  map.addChild(new YMapDefaultSchemeLayer());
}
