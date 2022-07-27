class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  find(value) {
    let cur = this.head;
    while (cur.value !== value) {
      cur = cur.next;
    }
    return cur;
  }

  add(newVlaue) {
    const newNode = new Node(newVlaue);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  insert(node, newValue) {
    const newNode = new Node(newValue);
    newNode.next = node.next;
    node.next = newNode;
  }

  remove(value) {
    let prev = this.head;
    while (prev.next.value !== value) {
      prev = prev.next;
    }
    if (prev.next !== null) {
      prev.next = prev.next.next;
    }
  }
}

const singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.add(3);
singlyLinkedList.add(1);
console.log(singlyLinkedList);
singlyLinkedList.remove(3);
console.log(singlyLinkedList);
