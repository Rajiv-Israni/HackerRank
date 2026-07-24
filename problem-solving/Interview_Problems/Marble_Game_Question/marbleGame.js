const ITERATIONS = 1000;

const MARBLES = {
  red: 5,
  yellow: 3,
  green: 1,
};

// Creates bag with 10 of each color
function createBag() {
  var bag = [];
  for (let i = 0; i < 10; i++) {
    bag.push("red");
    bag.push("yellow");
    bag.push("green");
  }
  return bag;
}

// Shuffles the bag using Fisher-Yates algorithm
function shuffleBag(bag) {
  for (let i = bag.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    // console.log(j);
    // console.log(i);
    [bag[i], bag[j]] = [bag[j], bag[i]];
  }
}

// Plays the game and returns the score for each round. The game continues until the bag is empty. The score is calculated based on the lowest value marble drawn in each round.
function playGame() {
  const bag = createBag();
  let score = 0;

  while (bag.length > 0) {
    shuffleBag(bag);

    const drawn = bag.splice(0, Math.min(3, bag.length));

    const counts = {};

    for (const color of drawn) {
      counts[color] = (counts[color] || 0) + 1;
    }

    const repeatedColor = Object.keys(counts).find(
      (color) => counts[color] >= 2,
    );

    if (repeatedColor) {
      for (const color of drawn) {
        if (color !== repeatedColor) {
          bag.push(color);
        }
      }
    } else {
      let lowest = drawn[0];

      for (const color of drawn) {
        if (MARBLES[color] < MARBLES[lowest]) {
          lowest = color;
        }
      }

      score += MARBLES[lowest];

      for (const color of drawn) {
        if (color !== lowest) {
          bag.push(color);
        }
      }
    }
  }
  return score;
}

// Simulates the game for a specified number of iterations and calculates the probability of each score occurring. It prints the results to the console.
function simulate() {
  const results = {};

  const start = Date.now();

  for (let i = 0; i < ITERATIONS; i++) {
    const score = playGame();

    results[score] = (results[score] || 0) + 1;
  }

  const end = Date.now();

  console.log(`Number of iterations were ${ITERATIONS}.`);
  console.log(`Total simulation took ${end - start} milliseconds.\n`);

  Object.keys(results)
    .sort((a, b) => a - b)
    .forEach((score) => {
      const count = results[score];
      const probability = ((count / ITERATIONS) * 100).toFixed(2);

      console.log(
        `Score ${score} occurs with a probability of ${probability}% (${count} out of ${ITERATIONS})`,
      );
    });
}

simulate();
