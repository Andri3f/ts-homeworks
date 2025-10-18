type Ticket = {
	where: string
	price: number
	passenger: string
	date: string
}
const ticket: unknown = {
	where: "Kyiv",
	price: 100,
	passenger: "John Doe",
	date: "2025-01-01",
}

function isTicket(value: unknown): asserts value is Ticket {
	if (!(!!value && typeof value === "object" && ["where", "price", "passenger", "date"].every((key) => key in value))) {
		throw new Error("Invalid ticket")
	}
}

isTicket(ticket)
const result6 = document.getElementById("result") as HTMLElement
result6.innerText = `Ticket: ${JSON.stringify(ticket.where)}`
