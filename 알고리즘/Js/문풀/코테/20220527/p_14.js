// * 프로그래머스

// ! 인풋
const arr1 = [
  [1, 2],
  [2, 3],
];
const arr2 = [
  [3, 4],
  [5, 6],
];

// ! 솔루션
function solution(arr1, arr2) {
  let answer = arr1.map((arr, row) =>
    arr.map((num, col) => num + arr2[row][col])
  );
  return answer;
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(arr1, arr2));

// ! best
