interface IStudent {
	name: string
	term: number
	faculty: string
}

interface IVillageElder extends IStudent {
	groupNum: number
}
const student: IStudent = { name: "John", term: 1, faculty: "Math" }
const villageElder: IVillageElder = { name: "Jane", term: 2, faculty: "Physics", groupNum: 2 }
