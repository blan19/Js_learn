// * 프로그래머스

// ! 인풋
const s = "[](){}";

// ! 솔루션
function solution(s) {
  const types = ["[", "(", "{"];
  const x = s.length - 1;
  let list = s.split("");
  let answer = 0;

  if (types.indexOf(list[0]) !== -1 && checkStk(list)) answer++;

  for (let i = 1; i <= x; i++) {
    // * 교환
    const ch = list[0];
    list.splice(0, 1);
    list.push(ch);

    if (types.indexOf(list[0]) === -1) continue;
    if (checkStk(list)) answer++;
  }

  return answer;
}

function checkStk(list) {
  const stk = [];
  for (let i = 0; i < list.length; i++) {
    if (stk.length && checkType(stk, list[i])) {
      stk.pop();
    } else stk.push(list[i]);
  }

  return stk.length ? false : true;
}

function checkType(stk, char) {
  switch (stk[stk.length - 1]) {
    case "[":
      return char === "]" ? true : false;
    case "{":
      return char === "}" ? true : false;
    case "(":
      return char === ")" ? true : false;
    default:
      return false;
  }
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(s));

// ! best
