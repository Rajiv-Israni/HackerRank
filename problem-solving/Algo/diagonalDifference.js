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
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
  let pri_diag_sum = 0;
  let sec_diag_sum = 0;
  let length = arr.length;
  for (var i = 0; i < length; i++) {
    for (var j = 0; j < length; j++) {
      if (i == j) {
        pri_diag_sum += arr[i][j];
        if (j == length - (i + 1)) {
          sec_diag_sum += arr[i][j];
        }
      } else if (j == length - (i + 1)) {
        sec_diag_sum += arr[i][j];
      }
    }
  }
  var diff = pri_diag_sum - sec_diag_sum;
  return diff >= 0 ? diff : -diff;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  let arr = Array(n);

  for (let i = 0; i < n; i++) {
    arr[i] = readLine()
      .replace(/\s+$/g, "")
      .split(" ")
      .map((arrTemp) => parseInt(arrTemp, 10));
  }

  const result = diagonalDifference(arr);

  ws.write(result + "\n");

  ws.end();
}
