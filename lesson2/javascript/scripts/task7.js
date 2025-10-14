"use strict";
var Awards;
(function (Awards) {
    Awards["Gold"] = "\u0437\u043E\u043B\u043E\u0442\u0430";
    Awards["Silver"] = "\u0441\u0440\u0456\u0431\u043D\u0430";
    Awards["Bronze"] = "\u0431\u0440\u043E\u043D\u0437\u043E\u0432\u0430";
    Awards["Certificate"] = "\u0433\u0440\u0430\u043C\u043E\u0442\u0430";
})(Awards || (Awards = {}));
const awards = [Awards.Gold, Awards.Silver, Awards.Bronze, Awards.Certificate];
function generateAwards(awardsTypes, awardsCount) {
    const awards = [];
    for (let i = 0; i < awardsCount; i++) {
        const randomIndex = Math.floor(Math.random() * awardsTypes.length);
        awards.push(awardsTypes[randomIndex]);
    }
    return awards;
}
const allAwards = generateAwards(awards, 10);
function countAwards(list) {
    const counts = {
        [Awards.Gold]: 0,
        [Awards.Silver]: 0,
        [Awards.Bronze]: 0,
        [Awards.Certificate]: 0,
    };
    for (const award of list)
        counts[award]++;
    return counts;
}
const counts = countAwards(allAwards);
const result7 = document.getElementById("result");
if (result7) {
    const lines = [];
    for (const type of awards)
        lines.push(`${type}: ${counts[type]}`);
    result7.innerHTML = lines.join("<br/>");
}
else {
    console.log("Підсумок нагород:");
    for (const type of awards)
        console.log(type, counts[type]);
}
