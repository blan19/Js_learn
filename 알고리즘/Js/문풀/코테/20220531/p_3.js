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
  let answer = [];
  let min = [];
  let num = 1;
  const arr = Array.from(Array(rows), () =>
    Array(columns)
      .fill(null)
      .map(() => num++)
  );

  queries.forEach((query, idx, origin) => {
    const update = query.map((num) => --num);
    const [row_1, col_1, row_2, col_2] = update;
    for (let i = col_1; i < col_2; i++) answer.push(arr[row_1][i]);
    for (let i = row_1; i < row_2; i++) answer.push(arr[i][col_2]);
    for (let i = col_2; i > col_1; i--) answer.push(arr[row_2][i]);
    for (let i = row_2; i > row_1; i--) answer.push(arr[i][col_1]);
    let cur = [...answer];
    arr[row_1][col_1] = answer.pop();
    for (let i = col_1 + 1; i < col_2; i++) arr[row_1][i] = answer.shift();
    for (let i = row_1; i < row_2; i++) arr[i][col_2] = answer.shift();
    for (let i = col_2; i > col_1; i--) arr[row_2][i] = answer.shift();
    for (let i = row_2; i > row_1; i--) arr[i][col_1] = answer.shift();
    min.push(cur.sort((a, b) => a - b)[0]);
    cur = [];
  });
  return min;
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(rows, columns, queries));

// ! best
