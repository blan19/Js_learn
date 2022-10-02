class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this._root = null;
  }
  // 코드 생략
  preOrder() {
    preOrderHandler(this._root);
    function preOrderHandler(node) {
      if (!node) return;
      console.log(node.value);
      preOrderHandler(node.left);
      preOrderHandler(node.right);
    }
  }
  // 코드 생략
  inOrder() {
    inOrderHandler(this._root);
    function inOrderHandler(node) {
      if (!node) return;
      inOrderHandler(node.left);
      console.log(node.value);
      inOrderHandler(node.right);
    }
  }
  // 코드 생략
  postOrder() {
    postOrderHandler(this._root);
    function postOrderHandler(node) {
      if (node.left) postOrderHandler(node.left);
      if (node.right) postOrderHandler(node.right);
      console.log(node.value);
    }
  }
  // 코드 생략
  levelOrder() {
    let root = this._root,
      queue = [],
      idx = 0;
    if (!root) return;
    queue.push(root);
    while (queue.length !== idx) {
      const node = queue[idx++];
      console.log(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
}
