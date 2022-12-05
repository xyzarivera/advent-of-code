const fs = require("fs");

function textFileToString(path) {
  return fs.readFileSync(path).toString("utf-8");
}

function textFileToArray(path) {
  const data = fs.readFileSync(path).toString("utf-8");
  const split = data.split("\n");
  return split.slice(0, split.length - 1);
}

module.exports = { textFileToString, textFileToArray };
