/**
 * # 제너레이터/이터레이터
 * - 제너레이터: 이터레이터이자 이터러블을 생성하는 함수
 */

function* generator() {
  yield 1;
  if (false) yield 2;
  yield 3;
}

const iterator = generator();
// well formed iterator
// 자기 자신을 리턴하는 함수
// next()를 통해 값을 꺼내는 것을 정할 수 있다
console.log(iterator[Symbol.iterator]() === iterator);
// 자바스크립트에서는 이터러블이면 순회 가능하다
for (const iterable of generator()) {
  console.log(iterable);
}

// 자바스크립트는 다형성이 높다
// 어떠한 값이라도 순회 가능

// # odds
// function* odds() {
//   yield 1;
//   yield 3;
//   yield 5;
// }

// const iterator2 = odds();
// console.log(iterator2.next());
// console.log(iterator2.next());
// console.log(iterator2.next());
// console.log(iterator2.next());

function* infinity(i = 0) {
  while (true) yield i++;
}

function* limit(l, iter) {
  for (const iterator of iter) {
    yield iterator;
    if (iterator === l) return;
  }
}

function* odds(l) {
  for (const iterator of limit(l, infinity(1))) {
    if (iterator % 2) yield iterator;
  }
}

// # for of, 전개 연산자, 구조 분해, 나머지 연산자
console.log(...odds(10));
console.log([...odds(10), ...odds(20)]);

const [head, ...tail] = odds(10);
console.log(head);
console.log(tail);

const [a, b, ...rest] = odds(20);
console.log(a);
console.log(b);
console.log(rest);
