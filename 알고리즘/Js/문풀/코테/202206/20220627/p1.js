// * 프로그래머스

// ! 인풋
const s = "110010101001";

// ! 솔루션
function solution(s) {
  return recur(s, 0, 0);
}

function recur(s, cnt, sum) {
  if (s === "1") return [cnt, sum];
  const stk = [];
  // console.log(s, cnt, sum);
  s.split("").forEach((ch) => {
    if (ch !== "0") stk.push(ch);
    else sum++;
  });
  const temp = changeBinary(stk.join(""));

  // return recur(, cnt + 1, sum);
}

function changeBinary(s) {
  return parseInt(s).toString(2);
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(s));

// ! best
