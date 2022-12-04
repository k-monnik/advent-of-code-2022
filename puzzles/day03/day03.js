//see prompt at https://adventofcode.com/2022/day/3

const fs = require('fs');

const lines = fs
    .readFileSync("puzzles/day03/input.txt", { encoding: "utf-8" })
    .split("\n")



//part 1

let rucksack = ""
lines.map(compartment => {
    let left = compartment.slice(0, compartment.length / 2);
    let right = compartment.slice(compartment.length / 2);
    rucksack += left.split('').filter(x => right.includes(x))[0];
});

const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
let prioritySum = rucksack.split('').reduce((a, b) => {
    return a + (alphabet.indexOf(b) + 1)
}, 0)

console.log(prioritySum);

//part 2

let combinedItemTypes = "";
let total = 0;

for (let i = 0; i < lines.length; i = i + 3) {
    let elf1 = lines[i];
    let elf2 = lines[i + 1];
    let elf3 = lines[i + 2];
    combinedItemTypes += elf1.split('').filter(x => elf2.includes(x) && elf3.includes(x))[0];
}

combinedItemTypes.split('').forEach(x => {
    total += alphabet.indexOf(x) + 1;
})

console.log(total);

