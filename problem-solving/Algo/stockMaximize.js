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
 * Complete the 'stockmax' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts INTEGER_ARRAY prices as parameter.
 */

function stockmax(prices) {
  // Write your code here
  let profit = 0;
  let sharesBought = 0;
  let moneySpent = 0;

  let max = Math.max(...prices);

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] === max) {
      profit += sharesBought * max - moneySpent;
      sharesBought = 0;
      moneySpent = 0;
      max = Math.max(...prices.slice(i + 1));
    } else {
      sharesBought++;
      moneySpent += prices[i];
    }
  }

  return profit;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const t = parseInt(readLine().trim(), 10);

  for (let tItr = 0; tItr < t; tItr++) {
    const n = parseInt(readLine().trim(), 10);

    const prices = readLine()
      .replace(/\s+$/g, "")
      .split(" ")
      .map((pricesTemp) => parseInt(pricesTemp, 10));

    const result = stockmax(prices);

    ws.write(result + "\n");
  }

  ws.end();
}
