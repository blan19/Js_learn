// * 프로그래머스

// ! 인풋
const call = "01033334444";

// ! 솔루션
function solution(phone_number) {
  const temp = String(phone_number).split("");
  const public = temp.splice(-4);
  const answer = [...temp.map(() => "*"), ...public].join("");
  return answer;
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(call));

// ! best
