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

  levelOrder(root) {
    let q = [root];
    let ans = `[`;
    while (q[0]) {
      let qlen = q.length, row = [];
      for (let i = 0; i < qlen; i++) {
        let curr = q.shift();

        /**
         * Adding to local Array
         */
        if (curr.element === null) {
          row.push("null");
        } else {
          row.push(curr.element);
        }

        /**
         * If Left Child is present
         */
        if (curr.left) {
          q.push(curr.left);
        }

        /**
         * If Right Child is Present
         */
        if (curr.right) {
          q.push(curr.right);
        }
      }
      ans += `[${row}], `;
    }
    return ans + `]`;
  }
}

let bt = new BinaryTree(3, 9, 20, null, null, 15, 7);
console.log(`Level Order: ${bt.levelOrder(bt.root)}`);
