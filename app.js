let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const DolarToYen = (montoDolares) => {
    return montoDolares * 146.26;
}

const EuroToDollar = (montoEuros) => {
    return montoEuros * oneEuroIs["USD"];
}

const YenToPound = (montoYenes) => {
    return montoYenes * 0.00556;
}


module.exports = { DolarToYen, EuroToDollar, YenToPound };