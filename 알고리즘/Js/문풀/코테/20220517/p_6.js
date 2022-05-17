// * 프로그래머스

// ! 인풋
// const strings = ["sun", "bed", "car"];
// const n = 0;

const strings = ["abce", "abcd", "cdx"];
const n = 2;

// ! 솔루션
function solution(strings, n) {
  return strings.sort((a, b) => {
    if (a[n].charCodeAt() === b[n].charCodeAt()) {
      let idx = 0;
      for (let i = 0; i < a.length; i++) {
        if (a[i].charCodeAt() !== b[i].charCodeAt()) {
          idx = i;
          break;
        }
      }
      return a[idx].charCodeAt() - b[idx].charCodeAt();
    }
    return a[n].charCodeAt() - b[n].charCodeAt();
  });
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(strings, n));

// ! best
