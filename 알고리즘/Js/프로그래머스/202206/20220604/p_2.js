// * 프로그래머스

// ! 인풋
const expression = "100-200*300-500+20";
// const expression = "100*200-300*500+20";

function calc(sign, val1, val2) {
  if (sign === "*") {
    return String(Number(val1) * Number(val2));
  } else if (sign === "+") {
    return String(Number(val1) + Number(val2));
  } else if (sign === "-") {
    return String(Number(val1) - Number(val2));
  }
}

function permutation(arr, selectNum) {
  let result = [];
  if (selectNum === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const fixer = v;
    const restArr = arr.filter((_, index) => index !== idx);
    const permuationArr = permutation(restArr, selectNum - 1);
    const combineFixer = permuationArr.map((v) => [fixer, ...v]);
    result.push(...combineFixer);
  });
  return result;
}

// ! 솔루션
function solution(expression) {
  let answer = [];
  let arr = [];
  let temp = [];
  const sign = ["*", "+", "-"];
  let str = "";

  expression.split("").forEach((char) => {
    if (sign.includes(char)) {
      arr.push(str, char);
      str = "";
    } else {
      str += char;
    }
  });

  if (str) arr.push(str);

  permutation(sign, 3).forEach((sub) => {
    temp = [...arr];
    while (true) {
      if (!temp.includes(sub[0])) {
        break;
      }
      let idx = temp.indexOf(sub[0]);
      temp.splice(idx - 1, 3, calc(sub[0], temp[idx - 1], temp[idx + 1]));
    }

    while (true) {
      if (!temp.includes(sub[1])) {
        break;
      }
      let idx = temp.indexOf(sub[1]);
      temp.splice(idx - 1, 3, calc(sub[1], temp[idx - 1], temp[idx + 1]));
    }

    while (true) {
      if (!temp.includes(sub[2])) {
        break;
      }
      let idx = temp.indexOf(sub[2]);
      temp.splice(idx - 1, 3, calc(sub[2], temp[idx - 1], temp[idx + 1]));
    }
    answer.push(Number(Math.abs(temp[0])));
  });
  return answer.sort((a, b) => b - a)[0];
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(expression));

// ! best

//   const numbers = expression.split(/[^0-9]/).map(v => Number(v));
//   const operators = expression.split(/[0-9]/).filter(v => v);

//   const formula = getFormula(numbers, operators);

//   const cases = [
//     ['*', '+', '-'], ['*', '-', '+'], ['+', '*', '-'],
//     ['+', '-', '*'], ['-', '+', '*'], ['-', '*', '+'],
//   ];

//   return Math.max(...cases.map(operators => {
//     let result = formula.slice();
//     operators.forEach(operator => {
//       result = computeByTargetOperator(result, operator);
//     });

//     return Math.abs(...result);
//   }));
// };

// const getFormula = (numbers, operators) => {
//   const formula = [];

//   numbers.forEach((number, i) => {
//     formula.push(number);

//     if (operators[i]) {
//       formula.push(operators[i]);
//     }
//   });

//   return formula;
// }

// const computeByTargetOperator = (formula, targetOperator) => {
//   const computation = {
//     '+': (a, b) => a + b,
//     '-': (a, b) => a - b,
//     '*': (a, b) => a * b,
//   }

//   const stack = [];
//   for (let i = 0; i < formula.length; i += 1) {
//     const target = formula[i];
//     if (target === targetOperator) {
//       const previousValue = stack.pop();
//       const nextValue = formula[i + 1];

//       const result = computation[targetOperator](previousValue, nextValue);

//       stack.push(result);
//       i += 1;
//       continue;
//     }

//     stack.push(target);
//   }

//   return stack;
// };
