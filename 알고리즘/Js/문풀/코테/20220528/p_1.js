// * 프로그래머스

// ! 인풋
// const s = "aabbaccc";
// const s = "xababcdcdababcdcd";
// const s = "aaaaaaaaaaaabcd";
// const s = "xxxxxxxxxxyyy";
const s = "a";

const result = "2a2ba3c";

// ! 솔루션
function solution(s) {
  let temp = s.split("");
  let n = 0;
  let answer = [];
  if (s.length === 1) {
    answer.push(s);
  }
  while (true) {
    if (n === Math.floor(s.length / 2)) {
      break;
    }
    n++;
    let prev = "";
    let cur = "";
    let num = 1;
    let res = "";
    for (let i = 0; i < s.length; i += n) {
      cur = temp.splice(0, n).join("");
      if (prev.length) {
        // 같을 때
        if (prev === cur) {
          num++;
        }
        // 다를 때
        if (prev !== cur) {
          num === 1 ? (res += `${prev}`) : (res += `${num}${prev}`);
          num = 1;
        }
      }
      prev = cur;
    }

    num === 1 ? (res += `${prev}`) : (res += `${num}${prev}`);
    answer.push(res);
    temp = s.split("");
    res = "";
    prev = "";
  }

  return answer.sort((a, b) => {
    return a.length - b.length;
  })[0].length;
}

// ! 주의사항

// ! 로직
// * n은 s.length / 2까지 range를 가진다.
// * i를 n만큼 증가시키며, 단어를 체크한다
// * 같으면 num++하고 같지 않은 단어를 만난다면 str에 붙인다.
// * 1이면 숫자를 안붙이고 진행

// ! 아웃풋
console.log(solution(s));

// ! 베스트
// const solution = (s) => {
//   const range = [...Array(s.length)].map((_, i) => i + 1);
//   return Math.min(...range.map((i) => compress(s, i).length));
// };

// const compress = (s, n) => {
//   const make = ([a, l, c]) => `${a}${c > 1 ? c : ""}${l}`;
//   return make(
//     chunk(s, n).reduce(
//       ([a, l, c], e) => (e === l ? [a, l, c + 1] : [make([a, l, c]), e, 1]),
//       ["", "", 0]
//     )
//   );
// };

// const chunk = (s, n) =>
//   s.length <= n ? [s] : [s.slice(0, n), ...chunk(s.slice(n), n)];
