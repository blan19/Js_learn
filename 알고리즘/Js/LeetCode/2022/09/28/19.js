class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add = (value) => {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  };
}

const removeNthFromEnd = (head, n) => {};

console.log(solution([1, 2, 3, 4, 5], 2));

console.log(solution([1], 1));

console.log(solution([1, 2], 1));
