import Freecurrencyapi from '@everapi/freecurrencyapi-js';



const freecurrencyapi = new Freecurrencyapi('fca_live_PdEvOklSEO15OZJDta0USIWIS2iPOao4pC9hecfs');

convertCurrency("INR","USD",3);
export async function convertCurrency(fromCurrency,toCurrency,units) {
    const res= await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    });
    const multiplier = res.data[toCurrency];

    return multiplier*units;
}

