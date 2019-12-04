const day4 = require("./day4");

test("Part 1.1", () => {
  expect(day4.isValid(111111)).toBe(true);
});

test("Part 1.2", () => {
  expect(day4.isValid(223450)).toBe(false);
});

test("Part 1.3", () => {
  expect(day4.isValid(123789)).toBe(false);
});

test("Part 2.1", () => {
  expect(day4.isValid2(112233)).toBe(true);
});

test("Part 2.2", () => {
  expect(day4.isValid2(123444)).toBe(false);
});

test("Part 2.3", () => {
  expect(day4.isValid2(111122)).toBe(true);
});
