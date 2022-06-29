const test = (n) => {
  if (n === 0) return 1;
  if (n === 1) return 2;
  const k = test(n - 1) + test(n - 2);
  return k;
};

console.log(test(7));
