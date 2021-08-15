/** # 이터러블/이터레이터 프로토콜
 *  - 이터러블: 이터레이터를 리턴하는 [Symbol.iterator]()를 가진 값
 *  - 이터레이터: { value, done } 객체를 리턴하는 next()를 가진 값
 *  - 이터러블/이터레이터 프로토콜: 이터러블을 for...of, 전개 연산자 등과 함께 동작하도록 규약
 *
 *  ## 전개 연산자
 *  - 마찬가지로 이터러블을 따른다
 */

const log = console.log;

// const arr = [1, 2, 3];

// const iterator = arr[Symbol.iterator]();

// iterator.next(); // {value: 1, done: false}
// iterator.next(); // {value: 2, done: false}

// const map = new Map([
//   ["a", 1],
//   ["b", 2],
//   ["c", 3],
// ]);

// for (const iterator of map.keys()) {
//   log(iterator);
// }

const iterable = {
  [Symbol.iterator]() {
    let i = 3;
    return {
      next() {
        return i === 0 ? { done: true } : { value: i--, done: false };
      },
      [Symbol.iterator]() {
        return this;
      },
    };
  },
};

const iterator = iterable[Symbol.iterator]();

const a = [1, 2, 3];

const buffer = [...a, ...iterator];

log(buffer);
