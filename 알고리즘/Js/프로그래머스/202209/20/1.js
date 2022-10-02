class Queue {
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

  isMax(value) {
    return this.queue.every((v) => v.priory <= value.priory);
  }

  peek() {
    return this.queue[this.front];
  }

  size() {
    return this.rear - this.front;
  }
}

// * 프로그래머스

// ! 인풋

// ! 솔루션
function solution(priorities, location) {
  let answer = 0;
  const queue = new Queue();
  priorities.forEach((v, i) => queue.enqueue({ priory: v, location: i }));
  while (queue.size()) {
    const rear = queue.dequeue();
    if (queue.isMax(rear)) {
      answer++;
      if (rear.location === location) return answer;
    } else queue.enqueue(rear);
  }
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution([1, 1, 9, 1, 1, 1], 0));

// ! best

// {
//   priory,
//   location,
// }
