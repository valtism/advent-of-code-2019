const aocLoader = require("aoc-loader");
require("dotenv").config();

const TEST_DAY = 1;

const day = require("./src/day" + TEST_DAY);

aocLoader(2019, TEST_DAY, process.env.AOC_SESSION).then(data => {
  console.time("Part 1");
  console.log("Part 1: " + day.part1(data));
  console.timeEnd("Part 1");
  console.time("Part 2");
  console.log("Part 2: " + day.part2(data));
  console.timeEnd("Part 2");
});
