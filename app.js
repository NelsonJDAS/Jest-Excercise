let oneEuroIs = {
  JPY: 156.5, // japan yen
  USD: 1.07, // us dollar
  GBP: 0.87, // british pound
};

const DolarToYen = (montoDolares) => {
  montoDolares = (montoDolares / oneEuroIs.USD) * oneEuroIs.JPY;
  return montoDolares;
};

const EuroToDollar = (montoEuros) => {
  let Euros = montoEuros * oneEuroIs.USD;
  return Euros;
};

const YenToPound = (montoYenes) => {
  let Yenes = (montoYenes / oneEuroIs.JPY) * oneEuroIs.GBP;
  return Yenes;
};

console.log(DolarToYen(1), EuroToDollar(1), YenToPound(1));

module.exports = { DolarToYen, EuroToDollar, YenToPound };
