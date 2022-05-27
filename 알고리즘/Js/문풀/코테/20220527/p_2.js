// * 프로그래머스

// ! 인풋
const s = "try hello world";

// ! 솔루션
function solution(s) {
  const answer = s
    .split(" ")
    .map((str) =>
      str
        .split("")
        .map((char, idx) =>
          (idx + 2) % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
        )
        .join("")
    )
    .join(" ");
  return answer;
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(s));

// ! best
