const products = [
  { name: "반팔티", price: 15000 },
  { name: "긴팔티", price: 20000 },
  { name: "핸드폰케이스", price: 15000 },
  { name: "후드티", price: 30000 },
  { name: "바지", price: 25000 },
];

// # filter

// ## 명령형
// const under20000 = [];
// for (const iterator of products) {
//   if (iterator.price < 20000) under20000.push(iterator);
// }
// console.log(under20000);

// ## 선언형
const filter = (f, iter) => {
  const res = [];
  for (const iterator of iter) {
    if (f(iterator)) res.push(iterator);
  }
  return res;
};

const under = filter((p) => p.price < 20000, products);
const over = filter((p) => p.price >= 20000, products);
