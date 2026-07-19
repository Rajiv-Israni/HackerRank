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
 * Complete the 'runningMedian' function below.
 *
 * The function is expected to return a DOUBLE_ARRAY.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function runningMedian(a) {
  let sortedArray = [];
  const medianArray = [];

  a.forEach((num) => {
    insertSorted(sortedArray, num);
    medianArray.push(calculateMedian(sortedArray));
  });

  return medianArray;
}

// Binary search to find the correct index, then insert there
function insertSorted(arr, num) {
  let low = 0;
  let high = arr.length;

  while (low < high) {
    const mid = (low + high) >> 1;
    if (arr[mid] < num) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  arr.splice(low, 0, num); // insert num at the correct spot
}

function calculateMedian(currentArray) {
  const n = currentArray.length;
  const mid = Math.floor(n / 2);
  let median;

  if (n % 2 === 0) {
    median = (currentArray[mid] + currentArray[mid - 1]) / 2;
  } else {
    median = currentArray[mid];
  }

  return median.toFixed(1);
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const aCount = parseInt(readLine().trim(), 10);

  let a = [];

  for (let i = 0; i < aCount; i++) {
    const aItem = parseInt(readLine().trim(), 10);
    a.push(aItem);
  }

  const result = runningMedian(a);

  ws.write(result.join("\n") + "\n");

  ws.end();
}
