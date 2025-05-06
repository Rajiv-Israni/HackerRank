"use strict";

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
 * Completed Function Below
 */

function plusMinus(arr) {
  let negElCount = 0,
    posElCount = 0,
    zeroElCount = 0;

  arr.forEach((el, i) => {
    if (el < 0) {
      negElCount++;
    } else if (el > 0) {
      posElCount++;
    } else {
      zeroElCount++;
    }
  });

  console.log((negElCount / arr.length).toFixed(6));
  console.log((posElCount / arr.length).toFixed(6));
  console.log((zeroElCount / arr.length).toFixed(6));
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  plusMinus(arr);
}
