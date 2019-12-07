const _ = require("lodash/array");

// Part 1
// ======

const part1 = input => {
  const instructions = parse(input);
  const root = "COM";
  const tree = { name: root, children: getChildren(instructions, root) };
  const depths = getOrbits(tree, 0);
  return depths;
};

const parse = input => input.split("\n").map(line => line.split(")"));

const getChildren = (instructions, parent) => {
  return instructions
    .filter(i => i[0] === parent)
    .map(i => ({
      name: i[1],
      children: getChildren(instructions, i[1])
    }));
};

const getOrbits = (node, depth) => {
  return node.children.length
    ? depth +
        node.children.reduce((acc, node) => acc + getOrbits(node, depth + 1), 0)
    : depth;
};

// Part 2
// ======

const part2 = input => {
  const instructions = parse(input);
  const root = "COM";
  const path = [];

  const tree = {
    name: root,
    children: getChildren2(instructions, root, path),
    path: path
  };

  const shortestPath = getShortestPath(tree);
  return shortestPath.length;
};

const getChildren2 = (instructions, parent, path) => {
  const newPath = path.concat(parent);
  return instructions
    .filter(i => i[0] === parent)
    .map(i => ({
      name: i[1],
      children: getChildren2(instructions, i[1], newPath),
      path: newPath
    }));
};

const findPath = (node, name) => {
  if (!node) {
    return null;
  }
  if (node.name === name) {
    return node.path;
  }
  if (!node.children.length) {
    return null;
  }
  return findPath(node.children[0], name) || findPath(node.children[1], name);
};

function getShortestPath(tree) {
  const youPath = findPath(tree, "YOU");
  const santaPath = findPath(tree, "SAN");
  const shortestPath = _.xor(youPath, santaPath);
  return shortestPath;
}

module.exports = { part1, part2 };
