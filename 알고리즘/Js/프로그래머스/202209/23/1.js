// * 프로그래머스

// ! 인풋

// ! 솔루션
function solution(n, works) {
  const N = works.length - 1;
  // * 순회하면서 값 조회
  works.sort((a, b) => b - a);

  for (let i = 0; ; i++) {
    if (i > N) i = 0;
    if (works.every((i) => i === 0)) break;
    if (works[i] && works[i] > 0) {
      works[i] = works[i] - 1;
      n--;
    }
    if (n === 0) break;
  }

  return works.reduce((acc, cur) => acc + cur ** 2, 0);
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(4, [4, 3, 3]));

// ! best
