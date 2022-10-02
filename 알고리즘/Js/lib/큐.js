

class ArrayQueue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;
    return value;
  }

  peek() {
    return this.queue[this.front];
  }

  size() {
    return this.rear - this.front;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedQueue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(value) {
    const node = new Node(value);
    if (this.head === null) this.head = this.tail = node;
    else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size += 1;
  }

  dequeue() {
    const value = this.head.value;
    this.head = this.head.next;
    this.size -= 1;
    return value;
  }

  peek() {
    return this.head.value;
  }
}

class CircularQueue {
  constructor(maxSize) {
    this.maxSize = maxSize;
    this.queue = [];
    this.front = 0;
    this.rear = 0;
    this.size = 0;
  }

  enqueue(value) {
    if (this.isFull()) return;
    this.queue[this.rear++] = value;
    this.rear = (this.rear + 1) % this.maxSize;
    this.size += 1;
  }

  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front = (this.front + 1) % this.maxSize;
    this.size -= 1;
    return value;
  }

  isFull() {
    return this.size === this.maxSize;
  }

  peek() {
    return this.queue[this.front];
  }
}


class Node {
  constructor({ key, value }) {
    this.key = key;
    this.value = value;
  }
}

class Heap {
  constructor() {
    this.items = [];
  }

  parentIndex = (index) => Math.floor((index - 1) / 2);

  leftChildIndex = (index) => index * 2 + 1;

  rightChildIndex = (index) => index * 2 + 2;

  parent = (index) => this.items[this.parentIndex(index)];

  leftChild = (index) => this.items[this.leftChildIndex(index)];

  rightChild = (index) => this.items[this.rightChildIndex(index)];

  peek = () => this.items[0];

  size = () => this.items.length;
}

class MinHeap extends Heap {
  bubbleUp = () => {
    let index = this.items.length - 1;
    const lastInsertedNode = this.items[index];

    while (index > 0) {
      if (this.parent(index).key > lastInsertedNode.key) {
        this.parent(index) = this.items[index];
        index = this.parentIndex(index);
      } else break;
    }

    this.items[index] = lastInsertedNode;
  };

  bubbleDown = () => {
    let index = 0;
    const size = this.size();
    const rootNode = this.peek();

    while(this.leftChild(index)) {
      const leftChildIndex = this.leftChildIndex(index);
      const rightChildIndex = this.rightChildIndex(index);

      const smallerChildIndex =
        rightChildIndex < size && this.items[rightChildIndex].key < this.items[leftChildIndex].key
          ? rightChildIndex
          : leftChildIndex;

      if(this.items[smallerChildIndex].key <= rootNode.key) {
        this.items[index] = this.items[smallerChildIndex];
        index = smallerChildIndex;
      } else break
    }

    this.items[index] = rootNode;
  };

  insert = (item) => {
    const node = new Node(item);
    this.items[this.items.length] = node;
    this.bubbleUp();
  };

  poll = () => {
    const size = this.size();
    const rootNode = this.peek();

    if(size <= 0) return undefined;
    if(size === 1) this.items = [];
    else {
      this.items[0] = this.items.pop();
      this.bubbleDown();
    }

    return rootNode;
  };
}

class PriorityQueue extends MinHeap {
  constructor() {
    super()
  }

  enqueue = (key, value) => this.insert({ key, value });

  dequeue = () => this.poll();

  isEmpty = () => this.items.length <= 0;
}