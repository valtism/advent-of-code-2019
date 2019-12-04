// Part 1
// ======

const part1 = input => {
  const [LOW, HIGH] = input.split("-").map(Number);
  var passwords = 0;
  var combo = LOW;

  while (combo <= HIGH) {
    if (isValid(combo)) {
      passwords++;
    }
    combo++;
  }
  return passwords;
};

const isValid = combo => {
  const DIGIT_LENGTH = 6;
  var hasDouble = false;

  for (let i = 0; i < DIGIT_LENGTH; i++) {
    const currentDigit = getNthDigit(combo, i);
    const nextDigit = getNthDigit(combo, i + 1);
    if (currentDigit < nextDigit) {
      return false;
    }
    if (currentDigit === nextDigit) {
      hasDouble = true;
    }
  }
  // If we reach this point, all numbers never decrease
  return hasDouble;
};

const getNthDigit = (val, n) => {
  //Remove all digits larger than nth
  var modVal = val % Math.pow(10, n + 1);

  //Remove all digits less than nth
  return Math.floor(modVal / Math.pow(10, n));
};

// Part 2
// ======

const part2 = input => {
  const [LOW, HIGH] = input.split("-").map(Number);
  var passwords = 0;
  var combo = LOW;

  while (combo <= HIGH) {
    if (isValid2(combo)) {
      passwords++;
    }
    combo++;
  }
  return passwords;
};

const isValid2 = combo => {
  const DIGIT_LENGTH = 6;
  var hasDouble = false;

  for (let i = 0; i < DIGIT_LENGTH; i++) {
    const currentDigit = getNthDigit(combo, i);
    const nextDigit = getNthDigit(combo, i + 1);
    if (currentDigit < nextDigit) {
      return false;
    }
    if (currentDigit === nextDigit) {
      const prevDigit = i > 0 ? getNthDigit(combo, i - 1) : -1;
      const futureDigit = i < DIGIT_LENGTH ? getNthDigit(combo, i + 2) : -1;
      if (prevDigit !== currentDigit && futureDigit !== currentDigit) {
        hasDouble = true;
      }
    }
  }
  // If we reach this point, all numbers never decrease
  return hasDouble;
};

module.exports = { part1, part2, isValid, isValid2 };
