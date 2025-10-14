type Marker = [number, number, string]
function getMarkersList(markersNumber: number): Marker[] {
	const markersList: Marker[] = []
	for (let i = 0; i < markersNumber; i++) {
		const data = prompt("Введіть координати і назву через пробіл")!.split(" ")
		markersList.push([Number(data[0]), Number(data[1]), data[2]])
	}
	return markersList
}
const markersList = getMarkersList(3)
const cityMarker = prompt("Введіть координати Міста і назву через пробіл")!.split(" ")

console.log(markersList)
function geClosestPlace(lat: number, long: number, markersList: Marker[]): Marker {
	let closest: Marker = markersList[0]
	let minDistSquared = Infinity
	for (let i = 0; i < markersList.length; i++) {
		const [mLat, mLong] = markersList[i]
		const dx = mLat - lat
		const dy = mLong - long
		const distSquared = dx * dx + dy * dy
		if (distSquared < minDistSquared) {
			minDistSquared = distSquared
			closest = markersList[i]
		}
	}
	return closest
}

const cityLat = Number(cityMarker[0])
const cityLong = Number(cityMarker[1])
const closestPlace = geClosestPlace(cityLat, cityLong, markersList)

const result6 = document.getElementById("result") as HTMLElement
if (result6) {
	result6.innerHTML = `Найближче місто: ${closestPlace[2]} (${closestPlace[0]}, ${closestPlace[1]})`
}
