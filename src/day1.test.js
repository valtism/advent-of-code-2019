const day1 = require("./day1");

test("14", () => {
    expect(day1.part2("14")).toBe(2);
});

test("1969", () => {
    expect(day1.part2("1969")).toBe(966);
});

test("100756", () => {
    expect(day1.part2("100756")).toBe(50346);
});
