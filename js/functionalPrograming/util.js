const filter = (f, iter) => {
  const res = [];
  for (const iterator of iter) {
    if (f(iterator)) res.push(iterator);
  }
  return res;
};

const map = (f, iter) => {
  const res = [];
  for (const item of iter) {
    res.push(f(item));
  }
  return res;
};

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

const products = [
  { name: "반팔티", price: 15000 },
  { name: "긴팔티", price: 20000 },
  { name: "핸드폰케이스", price: 15000 },
  { name: "후드티", price: 30000 },
  { name: "바지", price: 25000 },
];

const nums = [1, 2, 3, 4, 5];

const add = (a, b) => a + b;

console.log(
  reduce(
    add,
    map(
      (p) => p.price,
      filter((p) => p.price < 20000, products)
    )
  )
);
