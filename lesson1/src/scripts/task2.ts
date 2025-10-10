type carData = {
	brand: string
	year: number
	mileage: number
	working: boolean
}

const carData: carData = {
	brand: "Mercedes",
	year: 2017,
	mileage: 170000,
	working: true,
}
window.onload = () => {
	localStorage.setItem("data", JSON.stringify(carData))
	const raw: string | null = localStorage.getItem("data")
	if (!raw) return alert("Нема обєкта")
	const data: carData = JSON.parse(raw)
	document.write(`brand: ${data.brand}<br>`)
	document.write(`year: ${data.year}<br>`)
	document.write(`mileage: ${data.mileage}<br>`)
	document.write(`working: ${data.working}<br>`)
}
