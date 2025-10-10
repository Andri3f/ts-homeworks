"use strict";
const rates = {
    UAH: { USD: 37.5, EUR: 42.5 },
    USD: { UAH: 37.5, EUR: 0.9 },
    EUR: { UAH: 42.5, USD: 1 / 0.9 },
};
const amount = parseFloat(prompt("Введіть суму грошей"));
const currencyInput = prompt("Введіть валюту (USD, EUR, UAH)");
if (!amount || !currencyInput || isNaN(amount)) {
    alert("Невірні дані!");
}
else {
    if (currencyInput !== "USD" && currencyInput !== "EUR" && currencyInput !== "UAH") {
        alert("Невірна валюта!");
    }
    else {
        const currency = currencyInput;
        const targetCurrencies = Object.keys(rates[currency]);
        document.write(`${amount} ${currency} = <br/>`);
        targetCurrencies.forEach((target) => {
            const result = (amount * rates[currency][target]).toFixed(2);
            document.write(`${result} ${target} <br/>`);
        });
    }
}
