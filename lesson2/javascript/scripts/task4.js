"use strict";
const daysOff = ["Saturday", "Sunday", "Friday"];
const holidays = ["New Year", "Christmas", "Independence Day"];
const workDays = [1, 4, 6, 10, 15, 17, 18, 21, 25, 26, 29, 31];
let schedule = [];
function generateArray(holidays, daysOff, workDays) {
    let schedule = [];
    for (let i = 0; i < 10; i++) {
        const randomNumber = Math.floor(Math.random() * 3);
        if (randomNumber === 0) {
            const randomIndex = Math.floor(Math.random() * workDays.length);
            if (schedule.includes(workDays[randomIndex])) {
                i--;
                continue;
            }
            schedule.push(workDays[randomIndex]);
        }
        else if (randomNumber === 1) {
            const randomIndex = Math.floor(Math.random() * daysOff.length);
            if (schedule.includes(daysOff[randomIndex])) {
                i--;
                continue;
            }
            schedule.push(daysOff[randomIndex]);
        }
        else {
            const randomIndex = Math.floor(Math.random() * holidays.length);
            if (schedule.includes(holidays[randomIndex])) {
                i--;
                continue;
            }
            schedule.push(holidays[randomIndex]);
        }
    }
    return schedule;
}
function countDays(schedule, holidays, daysOff, workDays) {
    let holidaysCount = 0;
    let daysOffCount = 0;
    let workDaysCount = 0;
    for (let i = 0; i < schedule.length; i++) {
        const item = schedule[i];
        if (typeof item === "string") {
            if (holidays.includes(item)) {
                holidaysCount++;
            }
            else if (daysOff.includes(item)) {
                daysOffCount++;
            }
        }
        else if (typeof item === "number") {
            if (workDays.includes(item)) {
                workDaysCount++;
            }
        }
    }
    return { holidaysCount, daysOffCount, workDaysCount };
}
schedule = generateArray(holidays, daysOff, workDays);
const { holidaysCount, daysOffCount, workDaysCount } = countDays(schedule, holidays, daysOff, workDays);
const result4 = document.getElementById("result");
result4.innerHTML = `
<div>
	<p><strong>Святкові дні:</strong> ${holidaysCount}</p>
	<p><strong>Вихідні дні:</strong> ${daysOffCount}</p>
	<p><strong>Робочі дні:</strong> ${workDaysCount}</p>
	<p>
		<strong>${holidaysCount > daysOffCount ? "Святкових більше" : holidaysCount < daysOffCount ? "Вихідних більше" : "Однаково"}</strong>
	</p>
</div>
`;
