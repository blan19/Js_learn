// * 프로그래머스

// ! 인풋
const s = "for the last  week  ";

// const s = "3  d ";
// ! 솔루션
function solution(s) {
  let answer = s
    .split(" ")
    .map((str) =>
      str
        .split("")
        .map((char, idx) =>
          idx === 0 ? char.toUpperCase() : char.toLowerCase()
        )
        .join("")
    )
    .join(" ");
  return answer;
}

// function solution(s) {
//   var answer = "";
//   answer = s
//     .split(" ")
//     .map(
//       (word) => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()
//     )
//     .join(" ");
//   //word[0]은 빈 문자열을 만나면 undefined를,  word.charAt(0)은 빈 문자열을 만나면 빈 문자열을 반환한다.
//   return answer;
// }

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(s));

// ! best
