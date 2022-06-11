class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this._root = null;
  }

  insert(value) {
    const node = new Node(value);
    // 단계 1
    if (!this._root) this._root = node;
    else {
      // 단계 2
      // 순회하면서 조건을 확인한다
      let root = this._root;
      while (true) {
        // 루트보다 작은 경우
        if (root.value > value) {
          if (root.left) {
            root = root.left;
          } else {
            root.left = node;
            break;
          }
        } else if (root.value < value) {
          // 루트보다 큰 경우
          if (root.right) {
            root = root.right;
          } else {
            root.right = node;
            break;
          }
        } else {
          break;
        }
      }
    }
  }

  remove(value) {
    return removeHandler(this._root, value);

    function removeHandler(root, value) {
      if (!root) return null;
      else if (root.value > value) {
        root.left = removeHandler(root.left, value);
      } else if (root.value < value) {
        root.right = removeHandler(root.right, right);
      } else {
        // 삭제하길 원하는 노드를 발견
        if (!root.left && !root.right) {
          // 자식이 없는 경우
          return null;
        } else if (!root.left) {
          // 자식이 하나 있는 경우
          root = root.right;
          return root;
        } else if (!root.right) {
          // 자식이 하나 있는 경우
          root = root.left;
          return root;
        } else {
          // 자식이 두개 있는 경우
          const temp = searchMin(root.right);
          root.value = temp.value;
          root.right = removeHandler(root.right, temp.value);
          return root;
        }
      }
      return root;
    }

    function searchMin(root) {
      while (root.left) {
        root = root.left;
      }
      return root;
    }
  }

  find(value) {
    let node = this._root,
      found = false;
    while (node) {
      if (node.value > value) {
        node = node.left;
      } else if (node.value < value) {
        node = node.right;
      } else {
        found = !found;
        break;
      }
    }
    return found;
  }
}

const bst = new BST();
bst.insert(10);
bst.insert(15);
bst.insert(3);
bst.insert(4);
bst.insert(1);
bst.insert(17);
bst.insert(16);
bst.insert(14);
console.log(bst);
bst.remove(3);
console.log(bst);
console.log(bst.find(4));
