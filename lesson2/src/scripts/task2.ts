function getLastDigitOrSymbol(number: number): number
function getLastDigitOrSymbol(number: string): string
function getLastDigitOrSymbol(number: number | string): number | string {
	if (typeof number === "number") {
		return number % 10
	}
	return number.slice(-1)
}
// знаю що as погано але поки ми не брали тему з doom то так запишу шоб гарно вивести на екран .
const resultTask2 = document.getElementById("result") as HTMLElement
const number = prompt("Введіть число")
if (number && !isNaN(Number(number))) {
	resultTask2.innerHTML = getLastDigitOrSymbol(number).toString()
}
