class Heap {
  constructor() {
    this.items = [];
  }

  parentIndex = (index) => Math.floor((index - 1) / 2);

  leftChildIndex = (index) => index * 2 + 1;

  rightChildIndex = (index) => index * 2 + 1;

  parent = (index) => this.items[this.parentIndex(index)];

  leftChild = (index) => this.items[this.leftChildIndex(index)];

  rightChild = (index) => this.items[this.rightChildIndex(index)];

  peek = () => this.items[0];

  size = () => this.items.length;
}

class MinHeap extends Heap {
  constructor() {
    super();
  }

  bubbleUp = () => {
    let index = this.items.length - 1;
    const lastInsertedNode = this.items[index];

    while (index > 0) {
      if (this.parent(index) > lastInsertedNode) {
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

    while (this.leftChild(index)) {
      const leftChildIndex = this.leftChildIndex(index);
      const rightChildIndex = this.rightChildIndex(index);

      const smallerChildIndex =
        rightChildIndex < size &&
        this.items[rightChildIndex] < this.items[leftChildIndex]
          ? rightChildIndex
          : leftChildIndex;

      if (this.items[smallerChildIndex] <= rootNode) {
        this.items[index] = this.items[smallerChildIndex];
        index = smallerChildIndex;
      } else break;
    }

    this.items[index] = rootNode;
  };

  insert = (item) => {
    this.items[this.items.length] = item;
    this.bubbleUp();
  };

  poll = () => {
    const size = this.size();
    const root = this.peek();

    if (size <= 0) return undefined;
    if (size === 1) this.items = [];
    else {
      this.items[0] = this.items.pop();
      this.bubbleDown();
    }

    return root;
  };
}

// * 백준
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";

const input = fs.readFileSync(filePath).toString().split("\n");

const [N, ...rest] = input;

const solution = () => {
  const minHeap = new MinHeap()
  for(let i = 0; i < N; i++) {
    if(rest[i] === "0") {
      const result = minHeap.poll();
      if(result === undefined) console.log(0);
      else console.log(result);
    } else minHeap.insert(parseInt(rest[i]));
  }
};

solution()

// ! 인풋

// ! 솔루션

// ! 주의사항

// ! 로직

// ! 아웃풋

// ! best
