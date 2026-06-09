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
 * Complete the 'sherlockAndAnagrams' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function sherlockAndAnagrams(s) {
  // Write your code here
  const strMap = new Map();
  let count = 0;

  for (let i = 1; i <= s.length - 1; i++) {
    for (let j = 0; j <= s.length - i; j++) {
      const sortedStr = [...s.substr(j, i)].sort().join("");
      if (strMap.get(sortedStr)) {
        count += strMap.get(sortedStr);
        strMap.set(sortedStr, strMap.get(sortedStr) + 1);
      } else {
        strMap.set(sortedStr, 1);
      }
    }
  }

  return count;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const q = parseInt(readLine().trim(), 10);

  for (let qItr = 0; qItr < q; qItr++) {
    const s = readLine();

    const result = sherlockAndAnagrams(s);

    ws.write(result + "\n");
  }

  ws.end();
}
