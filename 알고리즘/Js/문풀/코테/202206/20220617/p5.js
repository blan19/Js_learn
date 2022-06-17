// * 프로그래머스

// ! 인풋
const n = 78;
// const n = 15;
// const n = 5;

// ! 솔루션
function solution(n) {
  for (let i = n + 1; ; i++) {
    if (calc(n) === calc(i)) return i;
  }

  // return 0;
}

function calc(num) {
  let cnt = 0;

  while (num) {
    if (num % 2 === 1) cnt++;
    num = Math.floor(num / 2);
  }

  return cnt;
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(n));

// ! best
