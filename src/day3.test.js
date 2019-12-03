const day3 = require("./day3");

test("Part 1.1", () => {
  expect(
    day3.part1(
      "R75,D30,R83,U83,L12,D49,R71,U7,L72\nU62,R66,U55,R34,D71,R55,D58,R83"
    )
  ).toBe(159);
});

test("Part 1.2", () => {
  expect(
    day3.part1(
      "R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51\nU98,R91,D20,R16,D67,R40,U7,R15,U6,R7"
    )
  ).toBe(135);
});

test("Part 2.1", () => {
  expect(
    day3.part2(
      "R75,D30,R83,U83,L12,D49,R71,U7,L72\nU62,R66,U55,R34,D71,R55,D58,R83"
    )
  ).toBe(610);
});

test("Part 2.2", () => {
  expect(
    day3.part2(
      "R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51\nU98,R91,D20,R16,D67,R40,U7,R15,U6,R7"
    )
  ).toBe(410);
});
