const fibbonaci = {
  step: 0,

  [Symbol.iterator]() {
    let i = 1;
    let prev = nextStep = 0;

    return {
      next: () => {
        if (i++ <= this.step) {
          [prev, nextStep] = [nextStep, prev + nextStep || 1];
          return { value: prev, done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
};

fibbonaci.step = 10;

for(let num of fibbonaci) {
  console.log(num);
}
