const mathOperations = require("./math");

let val1 = 100;
let val2 = -30;

test(`Add ${val1} + ${val2} to equal ${val1 + val2}`, () => {
  expect(mathOperations.sum(val1, val2)).toBe(val1+val2);
});

test(`Difference ${val1} - ${val2} to equal ${val1 - val2}`, () => {
  expect(mathOperations.diff(val1, val2)).toBe(val1-val2);
});

test(`Product ${val1} * ${val2} to equal ${val1 * val2}`, () => {
  expect(mathOperations.product(val1, val2)).toBe(val1*val2);
});
