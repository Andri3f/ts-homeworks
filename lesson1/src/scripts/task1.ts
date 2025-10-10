type data = {
	field1: number
	field2: string | number
}
const data: data = {
	field1: 1,
	field2: "String",
}
localStorage.setItem("data", JSON.stringify(data))
window.onload = () => {
	const raw: string | null = localStorage.getItem("data")
	if (!raw) return alert("Нема обєкта")
	const { field2 }: { field2: string | number } = JSON.parse(raw)
	if (typeof field2 === "string") return alert(`Довжина рядка ${field2} - ${field2.length}`)
	if (typeof field2 === "number") return alert(field2 % 2 === 0 ? `${field2} — парне` : `${field2} — не парне`)
}
