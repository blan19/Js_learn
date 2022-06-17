// * 프로그래머스

// ! 인풋
const n = 15;

// ! 솔루션
function solution(n) {
  let answer = 0;
  const N = Array.from(Array(n)).map((_, i) => i + 1);

  if (N.length === 1) return 1;
  if (N.length === 2) return 1;
  if (N.length === 3) return 2;

  N.forEach((_, idx, origin) => {
    const arr = origin.slice(idx);
    let sum = 0;

    // * 루프를 돌면서 값이 타겟 값과 같은지 확인
    for (const num of arr) {
      sum += num;
      if (sum === n) {
        answer++;
        break;
      }

      // * sum이 타겟보다 커질경우 순회할 이유가 사라졌으므로 break
      if (sum > n) {
        break;
      }
    }
  });

  return answer;
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(n));

// ! best
