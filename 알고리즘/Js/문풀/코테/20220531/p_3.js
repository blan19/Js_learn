// * 프로그래머스

// ! 인풋
const rows = 6;
const columns = 6;
const queries = [
  [2, 2, 5, 4],
  [3, 3, 6, 6],
  [5, 1, 6, 3],
];

// ! 솔루션
function solution(rows, columns, queries) {
  let num = 1;
  const arr = Array.from(Array(rows), () =>
    Array(columns)
      .fill(null)
      .map(() => num++)
  );
  return arr;
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(rows, columns, queries));

// ! best
