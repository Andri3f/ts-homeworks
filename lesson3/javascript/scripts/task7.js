"use strict";
const studentJournal = {
    math: [5, 12, 4, 9, 10],
    physics: [4, 10, 8, 9, 10],
    english: [7, 9, 8, 7, 6],
};
const marksManager = Object.assign(Object.assign({}, studentJournal), { averageMark: (marksArray) => {
        return marksArray.reduce((sum, mark) => sum + mark, 0) / marksArray.length;
    }, maxMark: (marksArray) => {
        return Math.max(...marksArray);
    } });
const result7 = document.getElementById("result");
result7.innerText = `Average mark: ${marksManager.averageMark(marksManager.physics)}, Max mark: ${marksManager.maxMark(marksManager.physics)}`;
