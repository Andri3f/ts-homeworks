"use strict";
function getDataAboutTransport(transportData) {
    if ('model' in transportData) {
        console.log(`Model: ${transportData.model}, Owner: ${transportData.owner}`);
        return transportData;
    }
    else if ('company' in transportData) {
        console.log(`Company: ${transportData.company}, Seats Count: ${transportData.seatsCount}`);
        return transportData;
    }
    else if ('fuelType' in transportData) {
        console.log(`Speed: ${transportData.speed}, Fuel Type: ${transportData.fuelType}`);
        return transportData;
    }
    const _exhaustiveCheck = transportData;
    throw new Error(`Unknown transport type: ${_exhaustiveCheck}`);
}
const carData = { model: 'Toyota', owner: 'John Doe' };
const busData = { company: 'ABC', seatsCount: 50 };
const airplaneData = { speed: 100, fuelType: 'Petrol' };
getDataAboutTransport(carData);
getDataAboutTransport(busData);
getDataAboutTransport(airplaneData);
//getDataAboutTransport({boatSize: 4, passengersCount: 10}s)
