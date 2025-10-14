const seasonsAndMounts: { season: string; seasonNumber: number; mountsNumbers: number[]; mountsNames: string[] }[] = [
	{
		season: "winter",
		seasonNumber: 1,
		mountsNumbers: [1, 2, 12],
		mountsNames: ["January", "February", "December"],
	},
	{
		season: "spring",
		seasonNumber: 2,
		mountsNumbers: [3, 4, 5],
		mountsNames: ["March", "April", "May"],
	},
	{
		season: "summer",
		seasonNumber: 3,
		mountsNumbers: [6, 7, 8],
		mountsNames: ["June", "July", "August"],
	},
	{
		season: "autumn",
		seasonNumber: 4,
		mountsNumbers: [9, 10, 11],
		mountsNames: ["September", "October", "November"],
	},
]

function getSeasonNumber(month: number): number
function getSeasonNumber(month: string): string
function getSeasonNumber(month: number | string): number | string {
	let result: string | undefined | number = undefined
	if (typeof month === "number" && month >= 1 && month <= 12) {
		result = seasonsAndMounts.find((seasonObj) => seasonObj.mountsNumbers.includes(month))?.seasonNumber
	}
	if (typeof month === "string") {
		result = seasonsAndMounts.find((seasonObj) => seasonObj.mountsNames.includes(month))?.season
	}
	if (!result) return "Invalid month"
	return result
}

const resultTask3 = document.getElementById("result") as HTMLElement
const month = prompt("Введіть номер або назву місяця (1-12 або January-December)")

if (month) {
	const monthNumber = parseInt(month)
	const result = isNaN(monthNumber) ? getSeasonNumber(month) : getSeasonNumber(monthNumber)
	resultTask3.innerHTML = result.toString()
}
