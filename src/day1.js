// Part 1
// ======

const part1 = input => {
  const masses = input.split("\n").map(Number);
  const fuelMasses = masses.map(num => Math.floor(num / 3) - 2);
  const totalFuel = fuelMasses.reduce((acc, curr) => acc + curr);
  return totalFuel;
};

// Part 2
// ======

const part2 = input => {
  const masses = input.split("\n").map(Number);
  const fuelMasses = masses.map(calculateFuelMass);
  const totalFuel = fuelMasses.reduce((acc, curr) => acc + curr);
  return totalFuel;
};

const fuelMass = fuel => Math.floor(fuel / 3) - 2;

const calculateFuelMass = fuel => {
  const mass = fuelMass(fuel);
  if (mass <= 0) {
    return 0;
  } else {
    return mass + calculateFuelMass(mass);
  }
};

module.exports = { part1, part2 };
