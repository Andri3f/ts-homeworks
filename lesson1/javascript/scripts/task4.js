"use strict";
function isWorkDayFromInput(input) {
    const parsedDayNumber = parseInt(input);
    if (!isNaN(parsedDayNumber) && parsedDayNumber >= 1 && parsedDayNumber <= 7) {
        return parsedDayNumber >= 1 && parsedDayNumber <= 5;
    }
    //* я б хотів зробити все легко через includes проте у мене помилка . буд вдячнйи за пояснення
    //rc/scripts/task4.ts:10:15 - error TS2550: Property 'includes' does not exist on type 'string[]'. Do you need to change your target library? Try changing the 'lib' compiler option to 'es2016' or later.
    //const workDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
    //const weekendDays = ["Saturday", "Sunday"]
    //if (workDays.includes(input)) {
    if (input === "Monday" || input === "Tuesday" || input === "Wednesday" || input === "Thursday" || input === "Friday") {
        return true;
    }
    if (input === "Saturday" || input === "Sunday") {
        return false;
    }
    return null;
}
const userDayInput = prompt("Введіть номер дня (1-7) або назву дня (Monday-Sunday)");
if (!userDayInput) {
    alert("Ви нічого не ввели");
}
else {
    const res = isWorkDayFromInput(userDayInput);
    if (res === null)
        alert("Невірне значення");
    else
        document.write(`${userDayInput} — ${res ? "робочий день" : "вихідний день"}`);
}
