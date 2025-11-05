//Задача 2. Створіть union-тип для трьох типів : car (модель, власник), bus (компанія, кількість місць),
//  airplane (швидкість, тип палива). Створити функцію, яка приймає параметр цього типу і виводить повну інформацію про об'єкт. 
type car = {model: string, owner: string}
type bus = {company: string, seatsCount: number}
type airplane = {speed: number, fuelType: string}
type TransportTypes = car | bus | airplane
function getDataAboutTransport(transportData: TransportTypes) {
   if ('model' in transportData) {
      console.log(`Model: ${transportData.model}, Owner: ${transportData.owner}`)
      return transportData
   } else if ('company' in transportData) {
      console.log(`Company: ${transportData.company}, Seats Count: ${transportData.seatsCount}`)
      return transportData
   } else if ('fuelType' in transportData) {
      console.log(`Speed: ${transportData.speed}, Fuel Type: ${transportData.fuelType}`)
      return transportData
   }
   const _exhaustiveCheck: never = transportData
   throw new Error(`Unknown transport type: ${_exhaustiveCheck}`)
}
const carData: car = {model: 'Toyota', owner: 'John Doe'}
const busData: bus = {company: 'ABC', seatsCount: 50}
const airplaneData: airplane = {speed: 100, fuelType: 'Petrol'}
getDataAboutTransport(carData)
getDataAboutTransport(busData)
getDataAboutTransport(airplaneData)
//getDataAboutTransport({boatSize: 4, passengersCount: 10}s)

