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
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function hourglassSum(arr) {
  let biggestSum;
  for (let i = 0; i <= arr.length - 3; i++) {
    for (let j = 0; j <= arr.length - 3; j++) {
      let currSum = calcSum(arr, i, j);
      if (i == 0 && j == 0) {
        biggestSum = currSum;
      } else if (currSum > biggestSum) {
        biggestSum = currSum;
      }
    }
  }
  return biggestSum;
}

function calcSum(arr, i, j) {
  let sum = 0;
  for (let k = i; k < i + 3; k++) {
    for (let l = j; l < j + 3; l++) {
      if ((k === i + 1 && l === j) || (k === i + 1 && l === j + 2)) {
        continue;
      } else {
        sum += arr[k][l];
      }
    }
  }
  return sum;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  let arr = Array(6);

  for (let i = 0; i < 6; i++) {
    arr[i] = readLine()
      .replace(/\s+$/g, "")
      .split(" ")
      .map((arrTemp) => parseInt(arrTemp, 10));
  }

  const result = hourglassSum(arr);

  ws.write(result + "\n");

  ws.end();
}
