//see prompt at https://adventofcode.com/2022/day/5

const fs = require('fs');

const lines = fs
    .readFileSync("puzzles/day05/input.txt", { encoding: "utf-8" })
    .split("\n")


let array = instructionSet.split('\n');

const instructionReader = ([itemCount, from, to]) => {
    let accumulator = [];
    for (let i = 0; i < itemCount; i++) {
        let popped = stackContainer[from - 1].pop();
        accumulator.push(popped);
    }
    //   accumulator.reverse(); //PART 2. FOR PART 1 REMOVE THIS LINE
};

for (let index in array) {
    let set = array[index]
        .replace('move', '')
        .replace('from', ',')
        .replace('to', ',');

    instructionReader(set.split(',').map(Number));
}
for (let i in stackContainer) {
    console.log(stackContainer[i].at(-1));
}