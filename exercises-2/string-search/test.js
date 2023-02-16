const stringSearch = require("./index");

test("Binary Search function exists", () => {
  expect(stringSearch).toBeDefined();
});

test("Return the correct number of matches", () => {
  expect(stringSearch("asdhjasjkdhjaskhdjkas", "dhj")).toEqual(2);
});

test("Return 0 when there are no matches found", () => {
  expect(stringSearch("asdhjasjkdhjaskhdjkas", "asq")).toEqual(0);
});
