const day6 = require("./day6");

test("Part 1.1", () => {
  expect(
    day6.part1("COM)B\nB)C\nC)D\nD)E\nE)F\nB)G\nG)H\nD)I\nE)J\nJ)K\nK)L")
  ).toBe(42);
});

test("Part 2.1", () => {
    expect(
      day6.part2("COM)B\nB)C\nC)D\nD)E\nE)F\nB)G\nG)H\nD)I\nE)J\nJ)K\nK)L\nK)YOU\nI)SAN")
    ).toBe(4);
  });