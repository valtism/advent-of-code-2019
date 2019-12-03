// Part 1
// ======

const part1 = input => {
  const positions = input
    .split("\n")
    .map(wire => wire.split(","))
    .map(populatePositions);

  const intersections = setIntersect(...positions);
  const pairs = toNumberPairs(intersections);
  const distances = manhattan(pairs);
  // Take positon 1 to avoid [0, 0], which doesn't count
  return distances.sort()[1];
};

const populatePositions = wireInputs => {
  // Order:  x, y
  var pos = [0, 0];
  const wirePositions = new Set();

  wireInputs.forEach(instruction => {
    const direction = instruction[0];
    const duration = instruction.slice(1);
    const vector = directionalVector(direction);

    for (let i = 0; i < duration; i++) {
      wirePositions.add(pos.toString());
      pos[0] = pos[0] + vector[0];
      pos[1] = pos[1] + vector[1];
    }
  });

  return wirePositions;
};

const directionalVector = direction => {
  switch (direction) {
    case "U":
      return [0, 1];
    case "R":
      return [1, 0];
    case "D":
      return [0, -1];
    case "L":
      return [-1, 0];
    default:
      throw new Error(`Could not parse value ${direction}`);
  }
};

const setIntersect = (set1, set2) => [...set1].filter(pos => set2.has(pos));

const toNumberPairs = set =>
  [...set].map(entry => entry.split(",").map(Number));

const manhattan = pairs =>
  pairs.map(pair => Math.abs(pair[0]) + Math.abs(pair[1]));

// Part 2
// ======

const part2 = input => {
  const coordinates = input.split("\n").map(wire => wire.split(","));
  const positionsAndSteps = coordinates.map(populatePositionsAndSteps);
  const intersections = [...mapIntersect(...positionsAndSteps).values()].map(
    e => e[0]
  );
  const intersectionSteps = intersections.map(
    int => positionsAndSteps[0].get(int) + positionsAndSteps[1].get(int)
  );

  // Take positon 1 to avoid [0, 0], which doesn't count
  return intersectionSteps.sort()[1];
};

const mapIntersect = (map1, map2) =>
  [...map1].filter(posAndSteps => map2.has(posAndSteps[0]));

const populatePositionsAndSteps = wireInputs => {
  // Order:  x, y
  var pos = [0, 0];
  var steps = 0;
  const wirePositions = new Map();

  wireInputs.forEach(instruction => {
    const direction = instruction[0];
    const duration = instruction.slice(1);
    const vector = directionalVector(direction);

    for (let i = 0; i < duration; i++) {
      if (!wirePositions.has(pos.toString())) {
        wirePositions.set(pos.toString(), steps);
      }
      pos[0] = pos[0] + vector[0];
      pos[1] = pos[1] + vector[1];
      steps++;
    }
  });

  return wirePositions;
};

module.exports = { part1, part2 };
