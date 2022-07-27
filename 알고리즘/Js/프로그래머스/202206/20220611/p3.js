// * 프로그래머스

// ! 인풋
// const citations = [3, 0, 6, 1, 5];
// const citations = [1, 4];
// const citations = [0, 1, 2];
// const citations = [0];
const citations = [0, 0, 0];

// ! 솔루션
function solution(citations) {
  if (citations.every((num) => num === 0)) {
    return 0;
  }
  return citations
    .sort((a, b) => b - a)
    .filter((_, idx) => citations[idx] >= idx + 1)
    .map((_, idx) => idx + 1)
    .pop();
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(citations));

// ! best
