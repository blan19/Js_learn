class Node {
  constructor(value) {
    this.value = value;
    this.letf = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    if (!this.root) {
      this.root = value;
      return;
    }

    let currentNode = this.root;

    while (currentNode) {
      if (currentNode.value < value) {
        if (!currentNode.right) {
          currentNode.right = value;
          break;
        }
        currentNode = currentNode.right;
      } else {
        if (!currentNode.left) {
          currentNode.left = value;
          break;
        }
        currentNode = currentNode.left;
      }
    }
  }

  has(value) {
    let currentNode = this.root;

    while (currentNode) {
      if (currentNode.value === value) return true;

      if (currentNode.value < value) currentNode = currentNode.right;
      else currentNode = currentNode.left;
    }

    return false;
  }
}
