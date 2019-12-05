// Part 1
// ======

// Part 1 is the same as part 2 entry point
const part1 = (input, inputInstruction) => {
  const codes = parse(input);
  return process(codes, 0, inputInstruction);
};

const parse = input => input.split(",").map(Number);

const splitNum = num => ("" + num).split("").map(Number);

const process = (codes, ptr, input, output) => {
  const opCode = codes[ptr] % 100;
  const modes = splitNum(Math.floor(codes[ptr] / 100)).reverse();
  const first = modes[0] ? codes[ptr + 1] : codes[codes[ptr + 1]];
  const second = modes[1] ? codes[ptr + 2] : codes[codes[ptr + 2]];

  switch (opCode) {
    case 1:
      codes[codes[ptr + 3]] = first + second;
      return process(codes, ptr + 4, input, output);
    case 2:
      codes[codes[ptr + 3]] = first * second;
      return process(codes, ptr + 4, input, output);
    case 3:
      codes[codes[ptr + 1]] = input;
      return process(codes, ptr + 2, input, output);
    case 4:
      console.log(first);
      return process(codes, ptr + 2, input, first);
    case 5:
      if (first !== 0) {
        return process(codes, second, input, output);
      } else {
        return process(codes, ptr + 3, input, output);
      }
    case 6:
      if (first === 0) {
        return process(codes, second, input, output);
      } else {
        return process(codes, ptr + 3, input, output);
      }
    case 7:
      codes[codes[ptr + 3]] = first < second ? 1 : 0;
      return process(codes, ptr + 4, input, output);
    case 8:
      codes[codes[ptr + 3]] = first === second ? 1 : 0;
      return process(codes, ptr + 4, input, output);
    case 99:
      return output;
    default:
      throw new Error(`Encounted incorrect opcode ${opCode} at postion ${ptr}`);
  }
};

module.exports = { part1 };
