/**
 * Rock, Paper Scissors
 *
 */

const { textFileToString } = require("../../utils");

const rock = 1;
const paper = 2;
const scissors = 3;
const lose = 0;
const draw = 3;
const win = 6;

// rock
const A = {
  X: lose + scissors, // lose
  Y: draw + rock, // draw, rock
  Z: win + paper,
};

// paper
const B = {
  X: lose + rock, // lose, rock
  Y: draw + paper,
  Z: win + scissors,
};

// scissors
const C = {
  score: 3,
  X: lose + paper,
  Y: draw + scissors,
  Z: win + rock,
};

// rock
const X = {
  score: 1,
  C: 6, // scissors
  B: 0, // paper
  A: 3, //
};

// paper
const Y = {
  score: 2,
  A: 6, // rock
  C: 0, // scissors
  B: 3,
};

// scissors
const Z = {
  score: 3,
  B: 6, // paper
  A: 0, //rock
  C: 3,
};

const scoreTable = { A, B, C, X, Y, Z };

// paper > rock > scissors > paper

function getMyScore1(path) {
  const string = textFileToString(__dirname + path);
  const data = string.split("\n");
  return data.reduce((acc, curr) => {
    if (!curr) {
      return acc;
    }
    return acc + scoreTable[curr[2]].score + scoreTable[curr[2]][curr[0]];
  }, 0);
}

function getMyScore2(path) {
  const string = textFileToString(__dirname + path);
  const data = string.split("\n");
  return data.reduce((acc, curr) => {
    if (!curr) {
      return acc;
    }
    return acc + scoreTable[curr[0]][curr[2]];
  }, 0);
}

console.log(getMyScore1(`/input.txt`));
console.log(getMyScore2(`/input.txt`));
