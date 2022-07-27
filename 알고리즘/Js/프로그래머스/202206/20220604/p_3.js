// * 프로그래머스

// ! 인풋
// const s = "{{2},{2,1},{2,1,3},{2,1,3,4}}";
// const s = "{{1,2,3},{2,1},{1,2,4,3},{2}}";
// const s = "{{20,111},{111}}";
// const s = "{{123}}";
const s = "{{4,2,3},{3},{2,3,4,1},{2,3}}";

// ! 솔루션
function solution(s) {
  let answer = new Set();
  let tuple = [];
  let stk = [];
  let num = "";
  s.split("")
    .slice(1, s.length - 1)
    .join("")
    .split("")
    .forEach((char) => {
      if (char.charCodeAt() >= 48 && char.charCodeAt() <= 57) {
        num += char;
      } else if (char === ",") {
        if (num.length) {
          stk.push(Number(num));
          num = "";
        }
      } else if (char === "}") {
        stk.push(Number(num));
        tuple.push([...stk]);
        stk = [];
        num = "";
      }
    });
  tuple
    .sort((a, b) => {
      return a.length - b.length;
    })
    .forEach((numbers) => numbers.forEach((number) => answer.add(number)));
  return Array.from(answer);
}

// ! 주의사항

// ! 로직
// * 제일 짧은 leng을 가진 순으로

// ! 아웃풋
console.log(solution(s));

// ! best
