//see prompt at https://adventofcode.com/2022/day/1

const fs = require('fs');

const lines = fs
    .readFileSync("puzzles/day01/input.txt", { encoding: "utf-8" })
    .split("\n")



//part 1
let elf = [];
let calories = 0;
lines.forEach((element) => {
    if (!element) {

        if (calories != 0) elf.push(calories);

        calories = null;
    } else {
        calories = parseInt(element) + calories;
    }
});

console.log(Math.max(...elf)); //Max

//part 2

elf.sort((a, b) => b - a);
console.log(elf[0] + elf[1] + elf[2]);