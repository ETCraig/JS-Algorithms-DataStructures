const binarySearch = require("./index");

test("Binary Search function exists", () => {
  expect(binarySearch).toBeDefined();
});

test("Return the correct index", () => {
  expect(binarySearch([2, 5, 7, 8, 10, 13, 15, 22, 29, 32], 22)).toEqual(7);
});

test("Return -1 when no match is found", () => {
  expect(binarySearch([2, 5, 7, 8, 10, 13, 15, 22, 29, 32], 12)).toEqual(-1);
});
