function getExp(value) {
  if (value === 1) return 1;
  for (let i = 1; ; i++) {
    if (value <= 2 ** i) return 2 ** i;
  }
}

function solution(queries) {
  let answer = 0;
  const map = new Map();
  queries.forEach(([key, value]) => {
    if (map.has(key)) {
      const [exp, num] = map.get(key);
      const sum = num + value;
      if (exp < sum) {
        answer += num;
        map.set(key, [getExp(sum), sum]);
      } else map.set(key, [exp, sum]);
    } else {
      map.set(key, [getExp(value), value]);
    }
  });

  return answer;
}

console.log(
  solution([
    [2, 10],
    [7, 1],
    [2, 5],
    [2, 9],
    [7, 32],
  ])
);

// * 2의 거듭제곱에서 가장 작은 것
