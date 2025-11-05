"use strict";
function isValidTicket(ticket) {
    return ['destination', 'price', 'passengerName', 'date'].every(key => key in ticket) && typeof ticket.destination === 'string' && typeof ticket.price === 'number' && typeof ticket.passengerName === 'string' && typeof ticket.date === 'string';
}
const ticketObject = {
    destination: 2,
    price: 100,
    passengerName: 'John Doe',
    date: '2025-01-01'
};
console.log(isValidTicket(ticketObject));
