const day2 = require("./day2");

test("1,0,0,0,99", () => {
  expect(day2.part1("1,0,0,0,99").toString()).toBe("2,0,0,0,99");
});

test("2,3,0,3,99", () => {
  expect(day2.part1("2,3,0,3,99").toString()).toBe("2,3,0,6,99");
});

test("2,4,4,5,99,0", () => {
  expect(day2.part1("2,4,4,5,99,0").toString()).toBe("2,4,4,5,99,9801");
});

test("1,1,1,4,99,5,6,0,99", () => {
  expect(day2.part1("1,1,1,4,99,5,6,0,99").toString()).toBe("30,1,1,4,2,5,6,0,99");
});
