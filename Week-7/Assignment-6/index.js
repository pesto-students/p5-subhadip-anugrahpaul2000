"use strict";
class Queue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(element) {
    while (this.stack1.length != 0) {
      this.stack2.push(this.stack1.pop());
    }

    this.stack1.push(element);

    while (this.stack2.length != 0) {
      this.stack1.push(this.stack2.pop());
    }
    return element;
  }

  dequeue() {
    if (this.stack1.length == 0) {
      return -1;
    }

    let element = this.stack1[this.stack1.length - 1];
    this.stack1.pop();
    return element;
  }

  operation(input) {
    let result = [];
    let i = 0;
    while (i < input.length) {
      switch (input[i]) {
        case 1:
          this.enqueue(input[i + 1]);
          i += 2;
          break;

        case 2:
          result.push(this.dequeue());
          i++;
          break;
      }
    }
    return result;
  }
}

const Q = new Queue();
console.log(Q.operation([1, 2, 1, 3, 2, 1, 4, 2]));
console.log(Q.operation([1, 2, 2, 2, 1, 4]));
