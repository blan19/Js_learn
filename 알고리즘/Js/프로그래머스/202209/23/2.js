// * 프로그래머스

// ! 인풋

// ! 솔루션
function solution(routes) {
  let answer = 0;
  let camera = -30001;

  routes.sort((a, b) => a[1] - b[1]);

  routes.forEach(([from, to]) => {
    if (camera < from) {
      camera = to;
      answer++;
    }
  });

  return answer;
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(
  solution([
    [-20, -15],
    [-14, -5],
    [-18, -13],
    [-5, -3],
  ])
);

// ! best
