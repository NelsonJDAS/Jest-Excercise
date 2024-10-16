// Importar la función sum del archivo app.js
const { DolarToYen, EuroToDollar, YenToPound } = require('./app.js');

// Comienza tu primera prueba
test('100 euro to dolar', () => {
    let Euros =  EuroToDollar(100);

    expect(Euros).toBe(107);
});

test('100 Dolar to Yen', () => {
    let Dolars = DolarToYen(100);

    expect(Dolars).toBe(14626);
});

test('10.000 Yen to Pound', () => {
    let Yens = YenToPound(10000);

    expect(Yens).toBe(55.6);
});