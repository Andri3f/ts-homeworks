type Journal = {
	math: number[]
	physics: number[]
	english: number[]
}
type MarksManager = Journal & {
	averageMark: (marksArray: number[]) => number
	maxMark: (marksArray: number[]) => number
}
const studentJournal: Journal = {
	math: [5, 12, 4, 9, 10],
	physics: [4, 10, 8, 9, 10],
	english: [7, 9, 8, 7, 6],
}

const marksManager: MarksManager = {
	...studentJournal,
	averageMark: (marksArray: number[]) => {
		return marksArray.reduce((sum, mark) => sum + mark, 0) / marksArray.length
	},
	maxMark: (marksArray: number[]) => {
		return Math.max(...marksArray)
	},
}

const result7 = document.getElementById("result") as HTMLElement
result7.innerText = `Average mark: ${marksManager.averageMark(marksManager.physics)}, Max mark: ${marksManager.maxMark(marksManager.physics)}`
