// * 프로그래머스

// ! 인풋

// ! 솔루션
function solution(n, times) {
  const sorted = times.sort((a, b) => a - b);
  let left = 1;
  let right = sorted[sorted.length - 1] * n;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    const sum = times.reduce((acc, cur) => acc + Math.floor(mid / cur), 0);

    if (sum < n) left = mid + 1;
    else right = mid - 1;
  }

  return left;
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(6, [7, 10]));
