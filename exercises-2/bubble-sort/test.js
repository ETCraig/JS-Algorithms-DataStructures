const bubbleSort = require("./index");

describe("Bubble sort", () => {
  test("sorts an array", () => {
    expect(bubbleSort([100, -40, 500, -124, 0, 21, 7])).toEqual([
      -124, -40, 0, 7, 21, 100, 500,
    ]);
  });
});
