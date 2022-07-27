// * 프로그래머스

// ! 인풋
const A = [1, 4, 2],
  B = [5, 4, 4];

// ! 솔루션
function solution(A, B) {
  let answer = 0;
  const b = [...B].sort((a, b) => a - b);
  const a = [...A].sort((a, b) => b - a);

  if (A.length === 1) return A[0] * B[0];

  a.forEach((target, idx) => {
    answer += target * b[idx];
  });

  return answer;
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(A, B));

// ! best
