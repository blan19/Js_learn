/**
 * @이진검색트리
 * 왼쪽 자식이 부모보다 작고, 오른쪽 자식이 부모보다 큰 트리
 */

class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  insert(value) {
    let thisNode = { left: null, right: null, value };

    if (!this._root) {
      this._root = thisNode;
    } else {
      let currentRoot = this._root;
      while (true) {
        if (currentRoot.value > value) {
          if (currentRoot.left !== null) {
            currentRoot = currentRoot.left;
          } else {
            currentRoot.left = thisNode;
            break;
          }
        } else if (currentRoot.value < value) {
          if (currentRoot.right !== null) {
            currentRoot = currentRoot.right;
          } else {
            currentRoot.right = thisNode;
            break;
          }
        } else {
          break;
        }
      }
    }
  }

  delete(value) {
    const findMin = (root) => {
      while (root.left) {
        root = root.left;
      }
      return root;
    };
    const deleteRecursively = (root, value) => {
      if (root) {
        return null;
      } else if (value < root.value) {
        root.left = deleteRecursively(root.left, value);
      } else if (value > root.value) {
        root.right = deleteRecursively(root.right, value);
      } else {
        if (!root.left && !root.right) {
          return null;
        } else if (!root.left) {
          root = root.right;
          return root;
        } else if (!root.right) {
          root = root.left;
          return root;
        } else {
          let temp = findMin(root.right);
          root.value = temp.value;
          root.right = deleteRecursively(root.right, temp.value);
          return root;
        }
      }
      return root;
    };
    return deleteRecursively(this._root, value);
  }

  find(value) {
    let currentRoot = this.root;
    let found = false;

    while (currentRoot) {
      if (currentRoot.value > value) {
        currentRoot = currentRoot.left;
      } else if (currentRoot.value < value) {
        currentRoot = currentRoot.right;
      } else {
        found = true;
        break;
      }
    }
    return found;
  }
}

const bst = new BinarySearchTree();
bst.insert(2);
bst.insert(5);
bst.insert(1);
bst.insert(7);
bst.insert(5);
bst.insert(6);
bst.delete(1);
console.log(bst);
