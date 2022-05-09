class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this._size = 0;
  }

  push(data) {
    const node = new Node(data);
    if (this.head == null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
    this._size++;
  }

  pop() {
    if (this.head == null) return -1;

    let returnNode = this.head.value;
    if (this.head != this.tail) this.head = this.head.next;
    else {
      this.head = null;
      this.tail = null;
    }
    this._size--;
    return returnNode;
  }

  size() {
    return this._size;
  }
}
