// * 프로그래머스

// ! 인풋
const expression = "100-200*300-500+20";
// const expression = "100*200-300*500+20";

function calc(sign, val1, val2) {
  console.log(val1, val2, sign);
  if (sign === "*") {
    return String(Number(val1) * Number(val2));
  } else if (sign === "+") {
    return String(Number(val1) + Number(val2));
  } else if (sign === "-") {
    console.log(val1, val2, sign);
    console.log(String(Number(val1) - Number(val2)));
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
    console.log("배열", temp);
    console.log("순열", sub);

    console.log("단계 1");
    while (true) {
      if (!temp.includes(sub[0])) {
        break;
      }
      let idx = temp.indexOf(sub[0]);
      temp.splice(idx - 1, idx + 1, calc(sub[0], temp[idx - 1], temp[idx + 1]));
    }
    console.log(temp);

    console.log("단계 2");
    console.log(temp);

    console.log("단계 3");
    console.log(temp);
    // temp.forEach((val, valIdx, origin) => {
    //   if (val === sub[0]) {
    //     origin.splice(
    //       valIdx - 1,
    //       valIdx,
    //       calc(val, origin[valIdx - 1], origin[valIdx + 1])
    //     );
    //   }
    // });
  });
  return;
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(expression));

// ! best
