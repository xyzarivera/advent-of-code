/**
 * Rucksack Reorganization
 *
 * in:list of all of the items currently in each rucksack
 * 1 line = 1 rucksack
 * 1 rucksack = has 2 compartments, equally divided
 * same character in both compartments = priority item
 * 1: find priority item and value, add all up
 *
 * UNICODE
 * a = 97 = 1
 * z = 122 = 26
 * A = 65 = 27
 * Z = 90 = 52
 */

const { textFileToArray } = require("../../utils");
// const data = textFileToArray(__dirname + "/testInput.txt");
const data = textFileToArray(__dirname + "/input.txt");

function getCharWeight(char) {
  const weight = char.charCodeAt(0);
  if (weight > 96 && weight < 123) {
    return weight - 96;
  } else if (weight > 64 && weight < 91) {
    return weight - 38;
  }
}

function findCommonCharacterWeightInCompartments(str) {
  const arr = str.split("");
  const len = arr.length / 2;
  let obj = {};
  let common;

  arr.forEach((char, i) => {
    if (i < len) {
      obj[char] = 0;
    } else if (obj[char] === 0) {
      common = char;
    }
  });
  const weight = getCharWeight(common);

  return weight;
}

function findCommonCharacterWeightInElves(A, B, C) {
  const uniqA = A.split("").filter((v, i, x) => x.indexOf(v) === i);
  const uniqB = B.split("").filter((v, i, x) => x.indexOf(v) === i);
  const uniqC = C.split("").filter((v, i, x) => x.indexOf(v) === i);

  let obj = {};
  let common;

  uniqA.forEach((char) => {
    obj[char] = 0;
  });

  uniqB.forEach((char) => {
    if (obj[char] != null) {
      obj[char] += 1;
    }
  });

  uniqC.forEach((char) => {
    if (obj[char] === 1) {
      common = char;
    }
  });

  const weight = getCharWeight(common);
  return weight;
}

function getTotalPriorityScoreCompartment(input) {
  return input.reduce((acc, curr) => {
    return acc + findCommonCharacterWeightInCompartments(curr);
  }, 0);
}

function getTotalPriorityScoreElves(input) {
  let sum = 0;
  for (let i = 0; i < input.length; i += 3) {
    sum += findCommonCharacterWeightInElves(
      input[i],
      input[i + 1],
      input[i + 2]
    );
  }
  return sum;
}

console.log(getTotalPriorityScoreCompartment(data));
console.log(getTotalPriorityScoreElves(data));
