class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.rigth = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let node = new TreeNode(value);

    if (!this.root) {
      this.root = node;
      return this;
    }

    let current = this.root;
    while (current) {
      if (value === current.value) {
        return;
      }

      if (value < current.value) {
        if (!current.left) {
          current.left = node;
          break;
        }
        current = current.left;
      }

      if (value > current.value) {
        if (!current.rigth) {
          current.rigth = node;
          break;
        }
        current = current.rigth;
      }
    }
  }

  traversePreOrder() {
    const traversePreOrderHelper = (node) => {
      if (!node) {
        return;
      }
      console.log(node.value);
      traversePreOrderHelper(node.left);
      traversePreOrderHelper(node.rigth);
    };
    traversePreOrderHelper(this.root);
  }

  traverseInOrder() {
    const traverseInOrderHelper = (node) => {
      if (!node) {
        return;
      }
      traverseInOrderHelper(node.left);
      console.log(node.value);
      traverseInOrderHelper(node.rigth);
    };
    traverseInOrderHelper(this.root);
  }

  traversePostOrder() {
    const traversePostOrderHelper = (node) => {
      if (node.left) {
        traversePostOrderHelper(node.left);
      }
      if (node.rigth) {
        traversePostOrderHelper(node.rigth);
      }
      console.log(node.value);
    };
    traversePostOrderHelper(this.root);
  }
}

const tree = new BinaryTree();
tree.insert(10);
tree.insert(1);
tree.insert(4);
tree.insert(6);
tree.insert(3);
tree.insert(9);
tree.insert(13);
tree.traversePreOrder();
console.log("\n");
tree.traverseInOrder();
console.log("\n");
tree.traversePostOrder();
