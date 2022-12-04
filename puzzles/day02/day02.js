//see prompt at https://adventofcode.com/2022/day/2

const fs = require('fs');

const lines = fs
    .readFileSync("puzzles/day02/input.txt", { encoding: "utf-8" })
    .split("")
    .filter((word) => word != "\n" && word != " ")
    .map((a) =>
        a
            .replace("X", "1")
            .replace("Y", "2")
            .replace("Z", "3")
            .replace("A", "1")
            .replace("B", "2")
            .replace("C", "3")
    );


//part 1

let score = 0
for (let index = 0; index < lines.length; index++) {
    if (index % 2 != 0) {
        //UNEVEN NUMBER
        //TIE
        if (lines[index - 1] == lines[index]) {
            score += parseInt(lines[index]) + 3;
        } else {
            //LOSE
            if (lines[index] == 3 && lines[index - 1] == 1) {
                score += parseInt(lines[index]) + 0; continue;
            }
            //WIN
            if (lines[index] == 1 && lines[index - 1] == 3) {
                score += parseInt(lines[index]) + 6; continue;
            }
            //LOSE
            if (lines[index - 1] > lines[index]) {
                score += parseInt(lines[index]) + 0; continue;
            } else {
                //WIN
                score += parseInt(lines[index]) + 6; continue;
            }
        }
    }
}
console.log(score, "Final");

//part 2

let updatedScore = 0;
for (let index = 0; index < lines.length; index++) {
    let points = 0;
    if (index % 2 != 0) {
        //TIE
        if (lines[index] == 2) {
            updatedScore += parseInt(lines[index - 1]) + 3;
        } else {
            //WIN
            if (lines[index] == 3) {
                points = parseInt(lines[index - 1]) + 1;
                if (points == 4) points = 1;
                updatedScore += 6 + points;
            }
            //LOSE
            if (lines[index] == 1) {
                points = parseInt(lines[index - 1]) - 1;
                if (points == 0) points = 3;
                updatedScore += points;
            }
        }
    }
} console.log(updatedScore, "Score");