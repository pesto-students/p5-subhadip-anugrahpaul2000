"use strict";
class Node {
  constructor(element) {
    this.left = null;
    this.element = element;
    this.right = null;
  }
}

class BST {
  constructor(...args) {
    this.root = null;
    this.add = this.add.bind(this);
    args.forEach(this.add);
  }

  add(element) {
    if (element === null) {
      return;
    }

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
    /**
     * If Data is Smaller than Root
     */
    if (newNode.element < node.element) {
      /**
       * if No Left Child
       */
      if (node.left === null) {
        node.left = newNode;
      } else {
        /**
         * If Left Child Exist
         */
        this.insertIntoTree(node.left, newNode);
      }
    } else {
      /**
       * Moving to the Right Side Tree (Right Biased)
       */
      /**
       * if No Right Child
       */
      if (node.right === null) {
        node.right = newNode;
      } else {
        /**
         * If Rigth Child Exist
         */
        this.insertIntoTree(node.right, newNode);
      }
    }
  }

  /**
   * Preorder Traversal
   */
  preorder(node) {
    if (node !== null) {
      console.log(node.element);
      this.inorder(node.left);
      this.inorder(node.right);
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

  display() {
    console.log("Preorder");
    this.preorder(this.root);

    console.log("Inorder");
    this.inorder(this.root);
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
          /**
           * If Right Child Exist
           */
          this.insertIntoTree(node.right, newNode);
        }
      }
    }
  
    /**
     * Preorder Traversal
     */
    preorder(node) {
      if (node !== null) {
        console.log(node.element);
        this.inorder(node.left);
        this.inorder(node.right);
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
  
    display() {
      console.log("Preorder");
      this.preorder(this.root);
  
      console.log("Inorder");
      this.inorder(this.root);
    }
  }

const maxDepth = (root) => {
  /**
   * Root is Null
   */
  if (root == null) {
    return 0;
  }
  // if root is not NULL, call the same function recursively for its left child and right child...
  let leftDepth = maxDepth(root.left);
  let rightDepth = maxDepth(root.right);
  // When the two child function return its depth...
  // Pick the maximum out of these two subtrees and return this value after adding 1 to it...
  return Math.max(leftDepth, rightDepth) + 1; // Adding 1 is the current node which is the parent of the two subtrees...
};

let bst = new BST(3, 9, 20, null, null, 15, 7);
bst.display();
// console.log(maxDepth([3, 9, 20, null, null, 15, 7]));
