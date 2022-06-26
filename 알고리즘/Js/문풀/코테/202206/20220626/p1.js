// * 프로그래머스

// ! 인풋
const n = 3;

// ! 솔루션
function solution(n) {
  let answer = [];

  const hanoi = (n, src, dest, mid) => {
    if (n === 1) answer.push([src, dest]);
    else {
      hanoi(n - 1, src, mid, dest);
      answer.push([src, dest]);
      hanoi(n - 1, mid, dest, src);
    }
  };

  hanoi(n, 1, 3, 2);

  return answer;
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(n));

// ! best
