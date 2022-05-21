// * 프로그래머스

// ! 인풋
// const s = "a B z";
// const n = 4;

// const s = "AB";
// const n = 1;

// const s = "Z";
// const n = 1;

const s = "AaZz";
const n = 25;

// ! 솔루션
function solution(s, n) {
  let answer = "";
  const str = s.split("");
  str.forEach((char) => {
    if (char === " ") {
      answer += " ";
    } else {
      let code = char.charCodeAt();
      let trans = code + n;
      if (122 >= code && 97 <= code) {
        if (trans > 122) {
          let aCode = "a".charCodeAt();
          answer += String.fromCharCode(aCode + trans - 122 - 1);
        } else {
          answer += String.fromCharCode(trans);
        }
      } else {
        if (trans > 90) {
          let aCode = "A".charCodeAt();
          answer += String.fromCharCode(aCode + trans - 90 - 1);
        } else {
          answer += String.fromCharCode(trans);
        }
      }
    }
  });
  return answer;
}
// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(s, n));
// ! best
