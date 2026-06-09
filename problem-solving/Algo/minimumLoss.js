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
 * Complete the 'minimumLoss' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts LONG_INTEGER_ARRAY price as parameter.
 */

function minimumLoss(price) {
  // Write your code here
  const indexes = {};
  let minLoss = Infinity;

  //map with indexes
  for (let i = 0; i < price.length; i++) {
    indexes[price[i]] = i;
  }
  //sort decending order
  price.sort((a, b) => b - a);

  //check difference between neighbors
  for (let i = 1; i < price.length; i++) {
    if (indexes[price[i - 1]] < indexes[price[i]]) {
      minLoss = Math.min(minLoss, price[i - 1] - price[i]);
    }
  }
  return minLoss;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const price = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((priceTemp) => parseInt(priceTemp, 10));

  const result = minimumLoss(price);

  ws.write(result + "\n");

  ws.end();
}
