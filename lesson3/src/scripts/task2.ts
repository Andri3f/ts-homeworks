type Car = { model: string; owner: string }
type Bus = { company: string; seatsCount: number }
type Airplane = { speed: number; fuelType: string }
type Transport = Car | Bus | Airplane

const selectedTransport: Transport = { company: "Toyota", seatsCount: 50 }

function getTransportInfo(t: Transport): Car | Bus | Airplane {
	if ("model" in t) return { model: t.model, owner: t.owner }
	if ("company" in t) return { company: t.company, seatsCount: t.seatsCount }
	return { speed: t.speed, fuelType: t.fuelType }
}

const resultTask2 = document.getElementById("result") as HTMLElement
resultTask2.innerHTML = JSON.stringify(getTransportInfo(selectedTransport))
