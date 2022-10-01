const nextGreaterElement = (array) => {
  let pointer1, pointer2;
  pointer1 = pointer2 = 0;
  let output = [];

  for (let i = 0; i < array.length; i++) {
    let j = i;
    while (j < array.length) {
      if (array[j] > array[pointer1]) {
        pointer2 = j;
        break;
      }
      j++;
    }

    if (i === array.length - 1) {
      output.push(-1);
      pointer1 = pointer2;
    } else if (j === array.length) {
      if (array[pointer2] === array[i]) {
        output.push(-1);
      } else if (array[i] < array[pointer2]) {
        output.push(array[pointer2]);
      }
      pointer1 = i + 1;
    } else {
      output.push(array[pointer2]);
      pointer1 = pointer2;
    }
  }
  return output;
};

console.log(nextGreaterElement([1, 3, 2, 4])); // 3, 4, 4, -1
console.log(nextGreaterElement([6, 8, 0, 1, 3])); //8, -1, 1, 3, -1
