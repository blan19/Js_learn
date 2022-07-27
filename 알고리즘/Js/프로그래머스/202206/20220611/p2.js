// * 프로그래머스

// ! 인풋
// const clothes = [
//   ["yellowhat", "headgear"],
//   ["bluesunglasses", "eyewear"],
//   ["green_turban", "headgear"],
// ];

const clothes = [
  ["crowmask", "face"],
  ["bluesunglasses", "face"],
  ["smoky_makeup", "face"],
];

// ! 솔루션
function solution(clothes) {
  let answer = 1;
  const map = new Map();
  clothes.forEach(([_, category]) => {
    if (map.has(category)) map.set(category, map.get(category) + 1);
    else map.set(category, 1);
  });

  for (const iter of map) {
    answer *= iter[1] + 1;
  }
  return answer - 1;
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(clothes));

// ! best
// * (해당 부위의 옷 개수 n(착용하는 경우의 수) + 1(착용하지 않는 경우)) * 옷 타입 개수 만큼 누적 계산(경우의 수 곱의 법칙)... -1(모두 착용하지 않는 경우)
