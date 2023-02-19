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

  /**
   * Preorder Traversal
   */
  preorder(node) {
    if (node !== null) {
      console.log(node.element);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }

  /**
   * In Order Traversal
   */
  inorder(node) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.element);
      this.inorder(node.right);
    }
  }

  /**
   * Post Order Traversal
   */
  postorder(node) {
    if (node !== null) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.element);
    }
  }

  display() {
    console.log("Preorder");
    this.preorder(this.root);

    console.log("Inorder");
    this.inorder(this.root);

    console.log("Postorder");
    this.postorder(this.root);
  }

  maxDepth(node) {
    if (node == null) {
      return 0;
    }
    else {
      let leftDepth = this.maxDepth(node.left);
      let rightDepth = this.maxDepth(node.right);

      if (leftDepth > rightDepth) {
        return leftDepth + 1;
      } 
      else {
        return rightDepth + 1;
      }
    }
  }
}

let bt = new BinaryTree(3, 9, 20, null, null, 15, 7);
bt.display();
console.log(`Max Height is: ${bt.maxDepth(bt.root)}`);
