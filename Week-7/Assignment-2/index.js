"use strict";
class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(...args) {
    this.head = null;
    this.current = null;
    this.previous = null;
    this.next = null;
    while (args.length) {
      this.add(args.shift());
    }
  }

  /**
   * Adds Node to the Linked List
   * @param {element} value
   */
  add(value) {
    let newNode = new Node(value);

    /**
     * If Head is Null make new Node head
     */
    if (this.head === null) {
      this.head = newNode;
      this.current = newNode;
    }

    this.current.next = newNode;
    this.current = newNode;
  }

  /**
   * Searches and Deletes the Element in the Linked List
   * @param {element} value
   * @returns null
   */
  delete(value) {
    if (this.head === null) {
      console.log(`Linked List is Empty. \nNothing to Delete\n`);
      return;
    }

    this.current = this.head;
    this.previous = this.head;
    while (this.current !== null) {
      if (this.current.element === value) {
        console.log(`${this.current.element} Deleted`);

        this.previous.next = this.current.next;

        if (this.current === this.head) {
          this.head = this.head.next;
        }
        return;
      }
      this.previous = this.current;
      this.current = this.current.next;
    }
  }

  /**
   * Prints the linked List
   * @returns null
   */
  print() {
    if (this.head === null) {
      console.log(`Linked List is Empty. \nNothing to Print`);
      return;
    }
    this.current = this.head;
    while (this.current !== null) {
      console.log(this.current.element);
      this.current = this.current.next;
    }
  }

  /**
   * Reverses the Linked List and Prints
   * @returns null
   */
  reverse() {
    if (this.head === null) {
      console.log(`Linked List is Empty. \nNothing to Reverse`);
      return;
    }

    this.current = this.head;
    this.previous = null;
    while (this.current !== null) {
      this.next = this.current.next;
      this.current.next = this.previous;
      this.previous = this.current;
      this.current = this.next;
    }
    this.head = this.previous;
    console.log(`Reverse Linked List`);
    this.print();
  }

  /**
   * Shifts the Linked List towards Left
   * @param {int} shifts
   * @returns null
   */
  leftShift(shifts) {
    if (this.head === null) {
      console.log(`Linked List is Empty. \nNothing to Shift`);
      return;
    }

    while (shifts--) {
      let temp = this.head;
      this.current = this.head;
      if (this.head.next !== null) {
        this.head = this.head.next;
      }
      while (this.current.next !== null) {
        this.current = this.current.next;
      }
      this.current.next = temp;
      temp.next = null;
    }
  }
}

const sLL = new SinglyLinkedList(2, 4, 7, 8, 9);
sLL.leftShift(3);
sLL.print();
console.log('');
const sLL2 = new SinglyLinkedList(1, 2, 3, 4, 5, 6, 7, 8);
sLL2.leftShift(4);
sLL2.print();