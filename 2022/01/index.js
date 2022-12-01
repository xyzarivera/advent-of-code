/**
 * Calorie Counting
 *
 * input: Array of calories per item per elf, 1 elf separated by space
 * output: number of calories the elf with most calories have
 */

const { txtToString } = require("../../utils");

// TODO: improve path
const string = txtToString("index.txt");

const data = string.split("\n");

function getCalories(arr) {
  let calories = [0];
  let i = 0;
  arr.forEach((element) => {
    const num = parseInt(element);
    if (Number.isNaN(num)) {
      i++;
      calories.push(0);
      return;
    }
    return (calories[i] += num);
  });
  return calories;
}

function maxCalorieCount(calArr) {
  return Math.max(...calArr);
}

function totalTopThreeCalories(calArr) {
  const sorted = calArr.sort((a, b) => b - a);
  return sorted[0] + sorted[1] + sorted[2];
}

const calories = getCalories(data);

console.log(maxCalorieCount(calories));
console.log(totalTopThreeCalories(calories));
