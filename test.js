// Importar la función sum del archivo app.js
const { DolarToYen, EuroToDollar, YenToPound } = require("./app.js");

// Comienza tu primera prueba
test("1 euro to dolar", () => {
  const dollars = EuroToDollar(1);
  expect(dollars).toBeCloseTo(1.07, 2);
});

test("1 Dolar to Yen", () => {
  const yen = DolarToYen(1);
  expect(yen).toBeCloseTo(146.26, 2);
});

test("100 Yen to Pound", () => {
  const pounds = YenToPound(100);
  expect(pounds).toBeCloseTo(0.56, 2);
});
