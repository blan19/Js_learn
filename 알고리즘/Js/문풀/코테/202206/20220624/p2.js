// * 프로그래머스

// ! 인풋
const n = 6;

// ! 솔루션
function solution(n) {
  let answer = Array.from(Array(n), (v, k) => Array.from(Array(k + 1)).fill(0));
  let cnt = 0;
  let yPos = -1,
    xPos = 0;

  while (n > 0) {
    for (let i = 0; i < n; i++) answer[++yPos][xPos] = ++cnt;
    for (let i = 0; i < n - 1; i++) answer[yPos][++xPos] = ++cnt;
    for (let i = 0; i < n - 2; i++) answer[--yPos][--xPos] = ++cnt;

    n = n - 3;
  }

  return answer.flat();
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(n));

// ! best
