function isPossible(map, minFee) {
  for (const [key, value] of map) {
    console.log(key, value);
  }
}

function getMinFee(fees) {
  return parseInt(
    fees
      .sort((a, b) => a[1] - b[1])[0][1]
      .toString()
      .split("")
      .map((_, idx) => (idx === 0 ? "1" : "0"))
      .join("")
  );
}

function solution(fees, t) {
  const map = new Map();

  fees.forEach(([x, y]) => {
    if (map.has(y)) map.get(y).push(x);
    else map.set(y, [x]);
  });

  isPossible(map, getMinFee(fees));

  return map;
}

console.log(
  solution(
    [
      [4, 1000],
      [6, 1000],
      [21, 3000],
      [16, 2000],
      [26, 3000],
    ],
    27
  )
);

// console.log(solution([[10, 680]], 27));

// * a분이 지날 때마다 b원 상승
// * a,b를 구하자
