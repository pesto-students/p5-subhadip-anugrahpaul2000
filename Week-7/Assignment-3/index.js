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
    this.temp = null;
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
   * Detects Loop present in Linked List
   * @param {int} position
   * @returns bool
   */
  detectLoop(position) {
    if (this.head === null) {
      console.log(`Linked List is Empty. \nNothing to Detect Loop`);
      return;
    }

    let i = 0;
    this.current = this.head;
    while (this.current !== null) {
      if (i === position) {
        this.temp = this.current;
      }
      i++;
      this.current = this.current.next;
    }

    if (this.temp !== this.head)
    {
        return true;
    }
    return false;
  }
}

const sLL = new SinglyLinkedList(1, 3, 4);
console.log(sLL.detectLoop(2));

const sLL2 = new SinglyLinkedList(1, 8, 3, 4);
console.log(sLL2.detectLoop(0));