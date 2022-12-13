//see prompt at https://adventofcode.com/2022/day/4

const fs = require('fs');

const lines = fs
    .readFileSync("puzzles/day04/input.txt", { encoding: "utf-8" })

//part 1

let pairs = 0;

lines.split(/\r?\n/).forEach(line => {
    let sections = line.split(",")
    startOne = Number(sections[0].split("-")[0])
    endOne = Number(sections[0].split("-")[1])
    startTwo = Number(sections[1].split("-")[0])
    endTwo = Number(sections[1].split("-")[1])
    if (
        (startOne <= startTwo && endOne >= endTwo)
        || (startOne >= startTwo && endOne <= endTwo)
        //part 2 condition
        || (startOne <= endTwo && startTwo <= endOne)) {
        pairs++
    }
})
console.log("pairs:", pairs)