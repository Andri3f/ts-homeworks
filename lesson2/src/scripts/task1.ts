type SeasonMonth = 3 | 6 | 9 | 12
const firstMountOfSeason = prompt("Введіть перший номер місяця якоїсь пори року (3,6,9,12)")
// знаю що as погано але поки ми не брали тему з doom то так запишу шоб гарно вивести на екран .
const resultTask1 = document.getElementById("result") as HTMLElement
const firstMountOfSeasonNumber = parseInt(firstMountOfSeason || "0")
function getSeason(month: SeasonMonth): string {
	switch (month) {
		case 3:
			return "Весна"
		case 6:
			return "Літо"
		case 9:
			return "Осінь"
		case 12:
			return "Зима"
		default:
			const _seasonCheck: never = month
			throw new Error(`Непідтримуваний місяць: ${month}`)
	}
}
if (!isNaN(firstMountOfSeasonNumber) && [3, 6, 9, 12].includes(firstMountOfSeasonNumber)) {
	const season = getSeason(firstMountOfSeasonNumber as SeasonMonth)
	resultTask1.innerHTML = season
} else {
	resultTask1.innerHTML = " Помилка: Введіть коректний місяць (3, 6, 9 ,12)"
}
