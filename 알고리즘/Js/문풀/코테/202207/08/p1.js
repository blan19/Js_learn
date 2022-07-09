// * 프로그래머스

// ! 인풋
const n = 4,
  works = [4, 3, 3];

// const n = 3,
//   works = [1, 1];

// ! 솔루션
function solution(n, works) {
  // * 순회하면서 값 조회
  for (let i = 0; i < n; i++) {
    // * 가장 큰 값에서 - 1을 해준다
    works.sort((a, b) => b - a);
    if (works[0] && works[0] > 0) works[0] = works[0] - 1;
  }

  return works.reduce((acc, cur) => acc + cur ** 2, 0);
}

// ! 주의사항

// ! 로직
// * 루프는 한 번, O(n) / o(logN)

// ! 아웃풋
console.log(solution(n, works));

// ! best
