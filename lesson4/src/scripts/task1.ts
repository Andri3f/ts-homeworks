//Задача 6. Описати тип квиток (куди, ціна, піб пасажира, дата). Створити функції для перевірки цього типу (Type Guard, Assert)
type TicketType = {
   destination: string
   price: number
   passengerName: string
   date: string
}

function isValidTicket(ticket: any): ticket is TicketType {
   return ['destination', 'price', 'passengerName', 'date'].every(key => key in ticket) && typeof ticket.destination === 'string' && typeof ticket.price === 'number' && typeof ticket.passengerName === 'string' && typeof ticket.date === 'string'
}
const ticketObject = {
   destination: 2,
   price: 100,
   passengerName: 'John Doe',
   date: '2025-01-01'
}
console.log(isValidTicket(ticketObject))