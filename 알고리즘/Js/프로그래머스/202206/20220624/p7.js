// * 프로그래머스

// ! 인풋
// const n = 2,
//   t = 4,
//   m = 2,
//   p = 1;

// const n = 16,
//   t = 16,
//   m = 2,
//   p = 1;

const n = 16,
  t = 16,
  m = 2,
  p = 2;

// ! 솔루션
function solution(n, t, m, p) {
  let answer = "";
  let list = getStr(n, t, m);
  for (let i = 0; i < t; i++) {
    answer += list[i][p - 1];
  }
  return answer.toUpperCase();
}

function getStr(n, t, m) {
  let res = [];
  let temp = [];
  let str = "";

  for (let i = 0; ; i++) {
    if (str.length > t * m) break;

    str += i.toString(n);
  }

  temp = str.split("");

  while (temp.length) {
    res.push(temp.splice(0, m));
  }

  return res;
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(n, t, m, p));

// ! best
