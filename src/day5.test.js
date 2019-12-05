const day5 = require("./day5");

test("Part 1", () => {
  expect(day5.part1("3,0,4,0,99", 1)).toBe(1);
});

test("Position: Equal to 8", () => {
  expect(day5.part1("3,9,8,9,10,9,4,9,99,-1,8", 8)).toBe(1);
});

test("Position: Not Equal to 8", () => {
  expect(day5.part1("3,9,8,9,10,9,4,9,99,-1,8", 16)).toBe(0);
});

test("Position: Less than 8", () => {
  expect(day5.part1("3,9,7,9,10,9,4,9,99,-1,8", 6)).toBe(1);
});

test("Position: Not less than 8", () => {
  expect(day5.part1("3,9,7,9,10,9,4,9,99,-1,8", 8)).toBe(0);
});

test("Immediate: Equal to 8", () => {
  expect(day5.part1("3,3,1108,-1,8,3,4,3,99", 8)).toBe(1);
});

test("Immediate: Not Equal to 8", () => {
  expect(day5.part1("3,3,1108,-1,8,3,4,3,99", 16)).toBe(0);
});

test("Immediate: Less than 8", () => {
  expect(day5.part1("3,3,1107,-1,8,3,4,3,99", 6)).toBe(1);
});

test("Immediate: Not less than 8", () => {
  expect(day5.part1("3,3,1107,-1,8,3,4,3,99", 8)).toBe(0);
});

test("Position: Is 0", () => {
  expect(day5.part1("3,12,6,12,15,1,13,14,13,4,13,99,-1,0,1,9", 0)).toBe(0);
});

test("Position: Is not 0", () => {
  expect(day5.part1("3,12,6,12,15,1,13,14,13,4,13,99,-1,0,1,9", 2)).toBe(1);
});

test("Immediate: Is 0", () => {
  expect(day5.part1("3,3,1105,-1,9,1101,0,0,12,4,12,99,1", 0)).toBe(0);
});

test("Immediate: Is not 0", () => {
  expect(day5.part1("3,3,1105,-1,9,1101,0,0,12,4,12,99,1", 2)).toBe(1);
});

test("Longer: Below 8", () => {
  expect(
    day5.part1(
      "3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31,1106,0,36,98,0,0,1002,21,125,20,4,20,1105,1,46,104,999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99",
      7
    )
  ).toBe(999);
});

test("Longer: Not below 8", () => {
  expect(
    day5.part1(
      "3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31,1106,0,36,98,0,0,1002,21,125,20,4,20,1105,1,46,104,999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99",
      8
    )
  ).toBe(1000);
});
