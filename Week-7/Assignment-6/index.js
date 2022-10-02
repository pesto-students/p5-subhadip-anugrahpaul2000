const Queue = (input) => {
  let queue = [];
  let result = [];
  let i = 0;
  while (i < input.length) {
    switch (input[i]) {
      case 1:
        queue.push(input[i + 1]);
        i += 2;
        break;

      case 2:
        if (queue.length) {
            result.push(queue.shift());
        } else {
            result.push(-1);
        }
        i++;
        break;
    }
  }

  return result;
};

console.log(Queue([1, 2, 1, 3, 2, 1, 4, 2]));
console.log(Queue([1, 2, 2, 2, 1, 4]));
