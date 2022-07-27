// * 프로그래머스

// ! 인풋
const s = "()()";

// ! 솔루션
function solution(s) {
  const stk = [];

  // * 시작이 )라면 애초에 잘못된 괄호
  if (s[0] === ")") {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    if (stk.length && stk[stk.length - 1] === "(" && s[i] === ")") {
      stk.pop();
    } else {
      stk.push(s[i]);
    }

    if (stk.length > s.length + (i + 1)) {
      return false;
    }
  }

  return stk.length ? false : true;
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(s));

// ! best
