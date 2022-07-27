// * 프로그래머스

// ! 인풋
// const p = "(()())()";
// const p = ")(";
// const p = "()))((()";
const p = "))))((((";

const recur = (str) => {
  console.log(str);
  let hash = {};
  let stk = [];
  let u = [];
  let v = [];

  if (!str.length) {
    return "";
  }

  for (let i = 0; i < str.length; i++) {
    if (hash[str[i]]) {
      hash[str[i]]++;
      if (hash["("] && hash[")"] && hash["("] === hash[")"]) {
        console.log(hash);
        u = str.splice(0, i + 1);
        v = str;
        break;
      }
    } else {
      hash[str[i]] = 1;
      if (hash["("] && hash[")"] && hash["("] === hash[")"]) {
        u = str.splice(0, i + 1);
        v = str;
        break;
      }
    }
  }

  for (let i = 0; i < u.length; i++) {
    if (
      stk.length &&
      stk[stk.length - 1] === "(" &&
      stk[stk.length - 1] !== u[i]
    )
      stk.pop();
    else stk.push(u[i]);
  }

  console.log(stk);

  if (!stk.length) {
    return u.concat(recur(v));
  } else {
    u.shift();
    u.pop();
    v = recur(v);
    for (let i = 0; i < u.length; i++) {
      if (u[i] === "(") u[i] = ")";
      else u[i] = "(";
    }
    return ["(", ...v, ")", ...u];
  }
};

// ! 솔루션
function solution(p) {
  let answer = recur(p.split("")).join("");
  return answer;
}

// ! 주의사항

// ! 로직

/**
1. 입력이 빈 문자열인 경우, 빈 문자열을 반환합니다. 
2. 문자열 w를 두 "균형잡힌 괄호 문자열" u, v로 분리합니다. 
단, u는 "균형잡힌 괄호 문자열"로 더 이상 분리할 수 없어야 하며, v는 빈 문자열이 될 수 있습니다. 
3. 문자열 u가 "올바른 괄호 문자열" 이라면 문자열 v에 대해 1단계부터 다시 수행합니다. 
  3-1. 수행한 결과 문자열을 u에 이어 붙인 후 반환합니다. 
4. 문자열 u가 "올바른 괄호 문자열"이 아니라면 아래 과정을 수행합니다. 
  4-1. 빈 문자열에 첫 번째 문자로 '('를 붙입니다. 
  4-2. 문자열 v에 대해 1단계부터 재귀적으로 수행한 결과 문자열을 이어 붙입니다. 
  4-3. ')'를 다시 붙입니다. 
  4-4. u의 첫 번째와 마지막 문자를 제거하고, 나머지 문자열의 괄호 방향을 뒤집어서 뒤에 붙입니다. 
  4-5. 생성된 문자열을 반환합니다.
 */

// * 짝이 맞을 때까지 분리 저장

// ! 아웃풋
console.log(solution(p));

// ! best

// function reverse(str) {
//   return str
//     .slice(1, str.length - 1)
//     .split("")
//     .map((c) => (c === "(" ? ")" : "("))
//     .join("");
// }

// function solution(p) {
//   if (p.length < 1) return "";

//   let balance = 0;
//   let pivot = 0;
//   do {
//     balance += p[pivot++] === "(" ? 1 : -1;
//   } while (balance !== 0);

//   const u = p.slice(0, pivot);
//   const v = solution(p.slice(pivot, p.length));

//   if (u[0] === "(" && u[u.length - 1] == ")") return u + v;
//   else return "(" + v + ")" + reverse(u);
// }

// const solution = (p) => {
//   return executeAsTheProblemDemands(p);
// };

// const executeAsTheProblemDemands = (p) => {
//   // 1. 입력이 빈 문자열일 경우, 빈 문자열을 반환합니다.
//   if (p.length === 0) {
//     return "";
//   }

//   // 2. 문자열 w를 두 "균형잡힌 괄호 문자열" u, v로 분리합니다.
//   // 단, u는 "균형잡힌 괄호 문자열"로 더 이상 분리할 수 없어야 하며,
//   // v는 빈 문자열이 될 수 있습니다.
//   let openCount = 0;
//   let closeCount = 0;
//   let v = p.split("");
//   let u = [];
//   while (true) {
//     let current = v.shift();

//     if (current === "(") {
//       u.push(current);
//       openCount += 1;
//     } else {
//       u.push(current);
//       closeCount += 1;
//     }

//     if (openCount > 0 && closeCount > 0 && openCount === closeCount) {
//       u = u.join("");
//       v = v.join("");
//       break;
//     }
//   }

//   // 3. 문자열 u가 "올바른 괄호 문자열" 이라면 문자열 v에 대해 1단계부터 다시 수행합니다.
//   // 3-1. 수행한 결과 문자열을 u에 이어 붙인 후 반환합니다.
//   if (u.charAt(0) === "(") {
//     return u + executeAsTheProblemDemands(v);
//   }

//   // 4. 문자열 u가 "올바른 괄호 문자열"이 아니라면 아래 과정을 수행합니다.
//   // 4-1. 빈 문자열에 첫 번째 문자로 '('를 붙입니다.
//   // 4-2. 문자열 v에 대해 1단계부터 재귀적으로 수행한 결과 문자열을 이어 붙입니다.
//   // 4-3. ')'를 다시 붙입니다.
//   return "(" + executeAsTheProblemDemands(v) + ")" + transformU(u);
// };

// const transformU = (u) => {
//   // 4-4. u의 첫 번째와 마지막 문자를 제거하고, 나머지 문자열의 괄호 방향을 뒤집어서 뒤에 붙입니다.
//   // 4-5. 생성된 문자열을 반환합니다.
//   const str1 = u.substring(1, u.length - 1);
//   const str2 = str1.replace(/\(/g, "!");
//   const str3 = str2.replace(/\)/g, "(");
//   const str4 = str3.replace(/\!/g, ")");

//   return str4;
// };
