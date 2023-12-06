(() => {
  "use strict";
  var e,
    t,
    n,
    a,
    o = {
      138: (e, t, n) => {
        n.a(
          e,
          async (e, t) => {
            try {
              var a = n(178);
              const e = document.createElement("div");
              (e.id = "weather"), await (0, a.s)(e), t();
            } catch (e) {
              t(e);
            }
          },
          1,
        );
      },
      178: (e, t, n) => {
        n.d(t, { s: () => w });
        const a = document.createElement("b"),
          o = document.createElement("ul");
        o.id = "buttonContainer";
        const r = "items",
          c = "lastCity",
          i = async (e) => {
            const t = await fetch(
              `https://api.openweathermap.org/data/2.5/weather?units=metric&q=\n          ${e}&appid=ab4639f5754271e773ed6d3ffd73f327`,
            );
            return await t.json();
          };
        async function p(e) {
          await ymaps3.ready;
          const { YMap: t, YMapDefaultSchemeLayer: n } = ymaps3;
          new t(document.querySelector("#map"), {
            location: { center: await e, zoom: 10 },
          }).addChild(new n());
        }
        const s = async (e) => {
            const t = await i(e),
              n = fetch(
                `https://geocode-maps.yandex.ru/1.x/?apikey=96aaccbc-e728-4c64-bcf3-ba18bc4c3d20&geocode=${e}&format=json`,
              )
                .then((e) => e.json())
                .then((e) => e.response)
                .then((e) => e.GeoObjectCollection)
                .then((e) => e.featureMember[0])
                .then((e) => e.GeoObject)
                .then((e) => e.Point)
                .then((e) => e.pos);
            return (
              (document.querySelector("#map").innerHTML =
                `Погода в ${t.name} ${t.main.temp}˚\n    <img src = https://openweathermap.org/img/wn/${t.weather[0].icon}@2x.png>`),
              p((await n).split(" ").map((e) => Number(e))),
              t
            );
          },
          m = (e, t) => {
            localStorage.setItem(e, JSON.stringify(t));
          },
          l = async (e) => {
            const t = localStorage.getItem(e);
            return null === t ? [] : JSON.parse(t);
          },
          d = (e, t) => {
            e.addEventListener("click", async () => {
              await s(e.innerHTML), m(c, e.innerHTML);
            });
          },
          u = (e, t) => {
            const n = document.createElement("li"),
              a = document.createElement("button");
            (a.innerHTML = t[t.length - 1].nameCity),
              n.append(a),
              o.append(n),
              d(a);
          },
          h = (e, t) => {
            for (let e = 0; e < t.length; e++) {
              const n = document.createElement("li"),
                a = document.createElement("button");
              (a.innerHTML = t[e].nameCity), n.append(a), o.append(n), d(a);
            }
          },
          y = document.createElement("button");
        (y.innerHTML = "Clear"),
          (y.className = "clearStorage"),
          document.body.append(y);
        const w = async (e) => {
          document.body.append(e);
          const t = document.createElement("div");
          (t.id = "map"), (t.className = "map");
          const n = document.createElement("input");
          (n.placeholder = "Enter city"), e.append(n);
          const d = document.createElement("button");
          (d.innerHTML = "Show weather"), e.append(d);
          const y = document.createElement("ol");
          e.append(y), a.append(t), e.append(a), e.append(o);
          const w = await l(r),
            f = await l(c);
          0 !== w.length
            ? 0 !== f.length
              ? (s(f), await h(0, w))
              : (s(w[w.length - 1].nameCity), await h(0, w))
            : (async (e, t) => {
                const n = fetch("https://get.geojs.io/v1/ip/geo.json")
                    .then((e) => e.json())
                    .then((e) => [Number(e.longitude), Number(e.latitude)]),
                  a = fetch("https://get.geojs.io/v1/ip/geo.json")
                    .then((e) => e.json())
                    .then((e) => e.city),
                  o = await i(await a);
                (document.querySelector("#map").innerHTML =
                  `Погода в ${o.name} ${o.main.temp}˚\n    <img src = https://openweathermap.org/img/wn/${o.weather[0].icon}@2x.png>`),
                  p(await n);
                let s = o.main.temp,
                  l = o.name,
                  d = o.weather[0].icon;
                10 === t.length && t.shift(),
                  t.push({ temp: s, nameCity: l, icon: d }),
                  m(c, l),
                  m(r, t),
                  u(0, t);
              })(0, w),
            (async function () {
              document
                .querySelector(".clearStorage")
                .addEventListener("click", async () => {
                  localStorage.clear(),
                    document.querySelector("#weather").remove(),
                    location.reload();
                });
            })();
          const b = [];
          d.addEventListener("click", async () => {
            const e = n.value;
            n.value = "";
            for (let e = 0; e < w.length; e++) b.push(w[e].nameCity);
            b.includes(e)
              ? await s(e)
              : await (async (e, t, n) => {
                  const a = await s(e);
                  let o = a.main.temp,
                    i = a.name,
                    p = a.weather[0].icon;
                  10 === n.length && n.shift(),
                    n.push({ temp: o, nameCity: i, icon: p }),
                    u(0, n),
                    m(c, i),
                    m(r, n);
                })(e, 0, w);
          });
        };
      },
    },
    r = {};
  function c(e) {
    var t = r[e];
    if (void 0 !== t) return t.exports;
    var n = (r[e] = { exports: {} });
    return o[e](n, n.exports, c), n.exports;
  }
  (e =
    "function" == typeof Symbol
      ? Symbol("webpack queues")
      : "__webpack_queues__"),
    (t =
      "function" == typeof Symbol
        ? Symbol("webpack exports")
        : "__webpack_exports__"),
    (n =
      "function" == typeof Symbol
        ? Symbol("webpack error")
        : "__webpack_error__"),
    (a = (e) => {
      e &&
        e.d < 1 &&
        ((e.d = 1),
        e.forEach((e) => e.r--),
        e.forEach((e) => (e.r-- ? e.r++ : e())));
    }),
    (c.a = (o, r, c) => {
      var i;
      c && ((i = []).d = -1);
      var p,
        s,
        m,
        l = new Set(),
        d = o.exports,
        u = new Promise((e, t) => {
          (m = t), (s = e);
        });
      (u[t] = d),
        (u[e] = (e) => (i && e(i), l.forEach(e), u.catch((e) => {}))),
        (o.exports = u),
        r(
          (o) => {
            var r;
            p = ((o) =>
              o.map((o) => {
                if (null !== o && "object" == typeof o) {
                  if (o[e]) return o;
                  if (o.then) {
                    var r = [];
                    (r.d = 0),
                      o.then(
                        (e) => {
                          (c[t] = e), a(r);
                        },
                        (e) => {
                          (c[n] = e), a(r);
                        },
                      );
                    var c = {};
                    return (c[e] = (e) => e(r)), c;
                  }
                }
                var i = {};
                return (i[e] = (e) => {}), (i[t] = o), i;
              }))(o);
            var c = () =>
                p.map((e) => {
                  if (e[n]) throw e[n];
                  return e[t];
                }),
              s = new Promise((t) => {
                (r = () => t(c)).r = 0;
                var n = (e) =>
                  e !== i &&
                  !l.has(e) &&
                  (l.add(e), e && !e.d && (r.r++, e.push(r)));
                p.map((t) => t[e](n));
              });
            return r.r ? s : c();
          },
          (e) => (e ? m((u[n] = e)) : s(d), a(i)),
        ),
        i && i.d < 0 && (i.d = 0);
    }),
    (c.d = (e, t) => {
      for (var n in t)
        c.o(t, n) &&
          !c.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (c.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    c(138);
})();
