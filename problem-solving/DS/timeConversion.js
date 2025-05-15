"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
  const AMPM = s.slice(-2);
  const hours = s.slice(0, 2);

  if ((AMPM == "AM" && hours < 12) || (AMPM == "PM" && hours == 12)) {
    return s.substring(0, s.length - 2);
  }
  if (AMPM == "AM" && hours == 12) {
    return "00" + s.substring(2, s.length - 2);
  }
  return +hours + 12 + s.substring(2, s.length - 2);
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  const result = timeConversion(s);

  ws.write(result + "\n");

  ws.end();
}
