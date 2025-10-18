"use strict";
const selectedTransport = { company: "Toyota", seatsCount: 50 };
function getTransportInfo(t) {
    if ("model" in t)
        return { model: t.model, owner: t.owner };
    if ("company" in t)
        return { company: t.company, seatsCount: t.seatsCount };
    return { speed: t.speed, fuelType: t.fuelType };
}
const resultTask2 = document.getElementById("result");
resultTask2.innerHTML = JSON.stringify(getTransportInfo(selectedTransport));
