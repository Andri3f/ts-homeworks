"use strict";
const ticket = {
    where: "Kyiv",
    price: 100,
    passenger: "John Doe",
    date: "2025-01-01",
};
function isTicket(value) {
    if (!(!!value && typeof value === "object" && ["where", "price", "passenger", "date"].every((key) => key in value))) {
        throw new Error("Invalid ticket");
    }
}
isTicket(ticket);
const result6 = document.getElementById("result");
result6.innerText = `Ticket: ${JSON.stringify(ticket.where)}`;
