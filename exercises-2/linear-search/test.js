const linearSearch = require("./index");

test("Linear Search function exists", () => {
  expect(linearSearch).toBeDefined();
});

test("Return the correct index", () => {
  expect(linearSearch(['a', 'b', 'c', 'd', 'e'], 'd')).toEqual(3);
});

test("Return -1 when no match is found", () => {
  expect(linearSearch(['a', 'b', 'c', 'e'], 'd')).toEqual(-1);
});
