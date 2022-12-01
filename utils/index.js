const fs = require("fs");

function txtToString(path) {
  return fs.readFileSync(path).toString("utf-8");
}

module.exports = { txtToString };
