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

const go = (...args) => reduce((a, f) => f(a), args);

console.log(
  go(
    0,
    (a) => a + 1,
    (a) => a + 10,
    (a) => a + 100
  )
);

const pipe =
  (...fs) =>
  (a) =>
    go(a, ...fs); // 내부에서 go를 사용하는 함수

const f = pipe(
  (a) => a + 1,
  (a) => a + 10,
  (a) => a + 100
);

console.log(f(0));
