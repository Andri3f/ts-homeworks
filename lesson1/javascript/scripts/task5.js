"use strict";
let numberCount = 0;
let stringCount = 0;
let lastValue = 0;
const okString = "Ok";
for (let i = 0; i < 10; i++) {
    const randomValue = Math.random();
    if (randomValue > 0.5) {
        lastValue = okString;
        stringCount++;
    }
    else {
        lastValue = randomValue;
        numberCount++;
    }
}
const result = numberCount === stringCount ? "однаково" : numberCount > stringCount ? "чисел" : "рядків";
document.write(`Більше  ${result}. <br/>
   рядків - ${stringCount} <br/>
   чисел - ${numberCount} <br/>
   Останнє значення: ${lastValue}`);
