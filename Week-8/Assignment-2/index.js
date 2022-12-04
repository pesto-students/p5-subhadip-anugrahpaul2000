"use strict";
class Node {
  constructor(element) {
    this.left = null;
    this.element = element;
    this.right = null;
  }
}

class BinaryTree {
  constructor(...args) {
    this.root = null;
    while (args.length) {
      this.add(args.shift());
    }
  }

  add(element) {
    let newNode = new Node(element);

    /**
     * If root is null
     */
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    /**
     * Insertion in Tree
     */
    this.insertIntoTree(this.root, newNode);
  }

  insertIntoTree(node, newNode) {
    if (node.left === null) {
      node.left = newNode;
    } else if (node.right === null) {
      node.right = newNode;
    } else {
      if (this.checkChild(node.left) === this.checkChild(node.right)) {
        this.insertIntoTree(node.left, newNode);
      } else if (this.checkChild(node.left)) {
        this.insertIntoTree(node.left, newNode);
      } else {
        this.insertIntoTree(node.right, newNode);
      }
    }
  }

  checkChild(node) {
    if (node.left === null || node.right === null) {
      return true;
    }
    return false;
  }

  validateBST() {
    function validator(root, min, max) {
      if (!root) {
        return true;
      }

      if ( (min !== null && root.element <= min) || (max !== null && root.element >= max) ) {
        return false;
      }

      return ( validator(root.left, min, root.element) && validator(root.right, root.element, max) );
    }

    return validator(this.root, null, null);
  }
}

let bt1 = new BinaryTree(2, 1, 3);
let bt2 = new BinaryTree(5, 1, 4, null, 3, 6);
console.log(bt1.validateBST());
console.log(bt2.validateBST());
