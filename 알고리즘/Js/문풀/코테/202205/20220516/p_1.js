// * 프로그래머스 - 2016년

// ! 인풋
const a = 5;
const b = 24;

// ! 솔루션
function solution(a, b) {
  let answer = 0;
  const month_val = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const day_val = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let total = 0;

  for (let i = 1; i < a; i++) {
    total += month_val[i - 1];
  }

  total += b - 1;

  answer = (5 + total) % 7;

  return day_val[answer];
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(a, b));

// ! best
