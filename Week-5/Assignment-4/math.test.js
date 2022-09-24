const mathOperations = require("./math");

describe("Math Operations Integers", () => {
  
  let val1 = 100;
  let val2 = -30;

  it(`Add ${val1} + ${val2} to equal ${val1 + val2}`, () => {
    expect(mathOperations.sum(val1, val2)).toBe(val1 + val2);
  });
  
  it(`Difference ${val1} - ${val2} to equal ${val1 - val2}`, () => {
    expect(mathOperations.diff(val1, val2)).toBe(val1 - val2);
  });
  
  it(`Product ${val1} * ${val2} to equal ${val1 * val2}`, () => {
    expect(mathOperations.product(val1, val2)).toBe(val1 * val2);
  });
});

describe("Math Operations Float", () => {
  
  let val1 = 64.41;
  let val2 = 0.744;

  it(`Add ${val1} + ${val2} to equal ${val1 + val2}`, () => {
    expect(mathOperations.sum(val1, val2)).toBe(val1 + val2);
  });
  
  it(`Difference ${val1} - ${val2} to equal ${val1 - val2}`, () => {
    expect(mathOperations.diff(val1, val2)).toBe(val1 - val2);
  });
  
  it(`Product ${val1} * ${val2} to equal ${val1 * val2}`, () => {
    expect(mathOperations.product(val1, val2)).toBe(val1 * val2);
  });
});