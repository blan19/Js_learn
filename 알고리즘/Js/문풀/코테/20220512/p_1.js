// * 음양 더하기

const absolutes = [4, 7, 12];
const signs = [true, false, true];

function solution(absolutes, signs) {
  let idx = 0;
  const answer = absolutes.reduce(
    (prev, cur) => (signs[idx++] ? prev + cur : prev - cur),
    0
  );
  return answer;
}

console.log(solution(absolutes, signs));
