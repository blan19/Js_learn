// * 프로그래머스

// ! 인풋
// const n = 5;
// const n = 6;
const n = 5000;

// ! 솔루션
function solution(n) {
  let cnt = 0;

  while (true) {
    if (n <= 1) {
      cnt++;
      break;
    }

    const mid = Math.floor(n / 2);
    if (n % 2 !== 0) cnt++;
    n = mid;
  }

  return cnt;
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(n));

// ! best
