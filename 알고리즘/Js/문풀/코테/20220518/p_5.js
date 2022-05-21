// * 프로그래머스

// ! 인풋
const n = 5;

// ! 솔루션
function solution(n) {
  let answer = 1;
  const isPrime = (number) => {
    if (number <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.ceil(Math.sqrt(number)); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  };
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      answer++;
    }
  }
  return answer;
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(n));

// ! best
