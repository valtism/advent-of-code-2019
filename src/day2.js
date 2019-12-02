// Part 1
// ======

const part1 = (input, noun, verb) => {
  var codes = input.split(",").map(Number);
  if (noun) {
    codes[1] = noun;
  }
  if (verb) {
    codes[2] = verb;
  }

  // Our pointer
  var i = 0;
  while (codes[i] != 99) {
    switch (codes[i]) {
      case 1:
        codes[codes[i + 3]] = codes[codes[i + 1]] + codes[codes[i + 2]];
        break;
      case 2:
        codes[codes[i + 3]] = codes[codes[i + 1]] * codes[codes[i + 2]];
        break;
      default:
        throw new Error(
          `Encounted incorrect opcode ${codes[i]} at postion ${i}`
        );
    }
    i = i + 4;
  }
  return codes;
};

// Part 2
// ======

const part2 = input => {
  const TARGET = 19690720;
  for (let noun = 0; noun < 100; noun++) {
    for (let verb = 0; verb < 100; verb++) {
      if (part1(input, noun, verb)[0] === TARGET) {
        return 100 * noun + verb;
      }
    }
  }
  return "Could not find noun + verb combination";
};

module.exports = { part1, part2 };
