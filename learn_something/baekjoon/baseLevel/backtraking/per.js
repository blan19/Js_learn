// const combination = (arr, select) => {
//   const results = [];
//   if (select === 1) return arr.map((value) => [value]);
//   arr.forEach((fixed, idx, origin) => {
//     const rest = origin.slice(idx + 1);
//     const combinationed = combination(rest, select - 1);
//     console.log(combinationed);
//     const attached = combinationed.map((com) => [fixed, ...com]);
//     results.push(...attached);
//   });
//   return results;
// };

// const arr = [1, 2, 3, 4];
// const result = combination(arr, 3);
// console.log(result);

const combination = (arr, select) => {
  const results = [];
  if (select === 1) return arr.map((value) => [value]);
  arr.forEach((fixed, idx, origin) => {
    const rest = [...origin.slice(0, idx), ...origin.slice(idx + 1)];
    console.log(rest);
    const combinationed = combination(rest, select - 1);
    const attached = combinationed.map((com) => [fixed, ...com]);
    results.push(...attached);
  });
  return results;
};

const arr = [1, 2, 3, 4];
const result = combination(arr, 3);
console.log(result);
