/**
 * Caching Function Using Object
 *
 * @param {Function Definition} func
 * @returns cached Output of Function
 */
function memoize(func) {
  const cache = {};
  return function (...args) {
    const key = args.toString();
    if ("undefined" !== typeof cache[key]) {
      return cache[key];
    }
    cache[key] = func(...args);
    return cache[key];
  };
}

/**
 * Calculates the Fibbonaci number at Nth step
 *
 * @param {int} n
 * @returns fibbonaci Number
 */
function fibbo(n) {
  if (n < 2) {
    return n;
  }
  return fibbo(n - 1) + fibbo(n - 2);
}

/**
 * Adds the inputs and returns the sum
 *
 * @param  {...any} args
 * @returns Sum of args
 */
function add(...args) {
  let sum = null;
  for (let value in args){
    sum += args[value];
  }
  return sum;
}

/**
 * Multiplies the inputs and returns the product
 *
 * @param  {...any} args
 * @returns Product of args
 */
 function multiply(...args) {
  let prod = 1;
  for (let value in args){
    prod *= args[value];
  }
  return prod;
}

/**
 * Calculates the Time taken to execute a function
 *
 * @param {function Definition} fn
 */
function time(fn) {
  console.time();
  console.log("\nResult = " + fn());
  console.timeEnd();
}

console.log("\n================================\n")
console.log("Fibbonaci");
/** Fibbonaci */
const memoizeFibbo = memoize(fibbo);
time(() => memoizeFibbo(45));
time(() => memoizeFibbo(42));
time(() => memoizeFibbo(45));
time(() => memoizeFibbo(42));

console.log("\n================================\n")
console.log("Addition");
/** Addition */
const memoizeAdd = memoize(add);
time(() => memoizeAdd(8498156156156,1151561456156126));
time(() => memoizeAdd(100, 100));
time(() => memoizeAdd(10));
time(() => memoizeAdd(100,200));
time(() => memoizeAdd(8498156156156,1151561456156126));
time(() => memoizeAdd(100,100));

console.log("\n================================\n")
console.log("Multiplication");
/** Multiplication */
const memoizeMultiply = memoize(multiply);
time(() => memoizeMultiply(9999999999999,9999999999999));
time(() => memoizeMultiply(100, 100));
time(() => memoizeMultiply(100));
time(() => memoizeMultiply(100,200));
time(() => memoizeMultiply(9999999999999,9999999999999));
time(() => memoizeMultiply(100,100));