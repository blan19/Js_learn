// # reduce
// ## 값을 축약해나가는 함수

const nums = [1, 2, 3, 4, 5];

const products = [
  { name: "반팔티", price: 15000 },
  { name: "긴팔티", price: 20000 },
  { name: "핸드폰케이스", price: 15000 },
  { name: "후드티", price: 30000 },
  { name: "바지", price: 25000 },
];

// 명령형
// let total = 0;
// for (const iterator of nums) {
//   total += iterator;
// }

// console.log(total);

const reduce = (f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const iterator of iter) {
    acc = f(acc, iterator);
  }
  return acc;
};

console.log(reduce((acc, item) => acc + item.price, 0, products));
