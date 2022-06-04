// * 프로그래머스 실패율

// ! 인풋
// test case 1
// const N = 5;
// const stages = [2, 1, 2, 6, 2, 4, 3, 3];
// test case 2
const N = 4;
const stages = [4, 4, 4, 4, 4];

// ! 솔루션
function solution(N, stages) {
  const cnt = Array.from(Array(N + 1)).fill(0);
  const pct = [];
  stages.forEach((stage) => cnt[stage - 1]++);
  let sum = cnt.reduce((prev, cur) => prev + cur, 0);
  for (let i = 0; i < N; i++) {
    pct.push({ idx: i, value: cnt[i] / sum });
    sum -= cnt[i];
  }
  const answer = pct
    .sort((a, b) => {
      if (a.value === b.value) {
        return a.idx - b.idx;
      }
      return b.value - a.value;
    })
    .map((obj) => obj.idx + 1);
  return answer;
}

// ! 주의사항
// * 실패율은 다음과 같이 정의한다.
// ? 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
// ? 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return 하도록 solution 함수를 완성하라.

// * 스테이지의 개수 N은 1 이상 500 이하의 자연수이다.
// * stages의 길이는 1 이상 200,000 이하이다.
// * stages에는 1 이상 N + 1 이하의 자연수가 담겨있다.
// * 각 자연수는 사용자가 현재 도전 중인 스테이지의 번호를 나타낸다.
// * 단, N + 1 은 마지막 스테이지(N 번째 스테이지) 까지 클리어 한 사용자를 나타낸다.
// * 만약 실패율이 같은 스테이지가 있다면 작은 번호의 스테이지가 먼저 오도록 하면 된다.
// * 스테이지에 도달한 유저가 없는 경우 해당 스테이지의 실패율은 0 으로 정의한다.

// ! 로직
// * N 만큼의 길이를 가진 배열을 만들고, 0으로 초기화
// * 순회하면서 벨류를 체크

// ! 아웃풋
console.log(solution(N, stages));
