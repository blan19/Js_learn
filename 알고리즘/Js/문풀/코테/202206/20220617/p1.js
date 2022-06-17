// * 프로그래머스

// ! 인풋
const arr = [1, 2, 3];

// ! 솔루션
const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));

const lcm = (a, b) => (a * b) / gcd(a, b);

function solution(arr) {
  if (arr.length === 1) return arr[0];
  if (arr.length === 2) return lcm(arr[0], arr[1]);

  let num = lcm(arr[0], arr[1]);
  for (let i = 2; i < arr.length; i++) {
    num = lcm(num, arr[i]);
  }
  return num;
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(arr));

// ! best
