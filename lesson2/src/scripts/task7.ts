enum Awards {
	Gold = "золота",
	Silver = "срібна",
	Bronze = "бронзова",
	Certificate = "грамота",
}

const awards: Awards[] = [Awards.Gold, Awards.Silver, Awards.Bronze, Awards.Certificate]

function generateAwards(awardsTypes: Awards[], awardsCount: number): Awards[] {
	const awards: Awards[] = []
	for (let i = 0; i < awardsCount; i++) {
		const randomIndex = Math.floor(Math.random() * awardsTypes.length)
		awards.push(awardsTypes[randomIndex])
	}
	return awards
}
const allAwards = generateAwards(awards, 10)

function countAwards(list: Awards[]): { [key in Awards]: number } {
	const counts: { [key in Awards]: number } = {
		[Awards.Gold]: 0,
		[Awards.Silver]: 0,
		[Awards.Bronze]: 0,
		[Awards.Certificate]: 0,
	}
	for (const award of list) counts[award]++
	return counts
}

const counts = countAwards(allAwards)

const result7 = document.getElementById("result") as HTMLElement | null
if (result7) {
	const lines: string[] = []
	for (const type of awards) lines.push(`${type}: ${counts[type]}`)
	result7.innerHTML = lines.join("<br/>")
} else {
	console.log("Підсумок нагород:")
	for (const type of awards) console.log(type, counts[type])
}
