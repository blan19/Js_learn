// * 프로그래머스

// ! 인풋
const n = 3;
const m = 12;

// ! 솔루션
function solution(n, m) {
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  const lcm = (a, b) => (a * b) / gcd(a, b);
  return [gcd(n, m), lcm(n, m)];
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(n, m));

// ! best
