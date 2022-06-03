// * 프로그래머스

// ! 인풋
const places = [
  ["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"],
  ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
  ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
  ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
  ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"],
];

// ! 솔루션
function solution(places) {
  let visited = Array.from(Array(5), () => Array(5).fill(false));
  places.forEach((place) => {
    const map = place.map((str) => str.split(""));
    console.log(map);
  });
  return;
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(places));

// ! best
