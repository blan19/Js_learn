// * 프로그래머스

// ! 인풋
const step = 4;

// ! 솔루션
function solution(step) {
  if (step < 0) return 0;
  if (step === 0) return 1;

  return solution(step - 1) + solution(step - 2) + solution(step - 3);
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(step));

// ! best
