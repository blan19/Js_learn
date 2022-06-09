// * 프로그래머스
const n = 8,
  a = 7,
  b = 8;

// ! 인풋

// ! 솔루션
function solution(n, a, b) {
  let N = n;
  while (N > 0) {
    const max = Math.max(a, b);
    const min = Math.min(a, b);
    if (max % 2 === 0 && max - 1 === min) {
      break;
    }
    N--;
    const subA = Math.round(a / 2);
    const subB = Math.round(b / 2);
    a = subA;
    b = subB;
  }
  return n - N + 1;
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(n, a, b));

// ! best
