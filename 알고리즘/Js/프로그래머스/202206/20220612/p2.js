// * 프로그래머스

// ! 인풋
// const number = "1924",
//   k = 2;

// const number = "1231234",
//   k = 3;

const number = "4177252841",
  k = 4;

// const number = "654321",
//   k = 1;

// const number = "654321",
//   k = 5;

// ! 솔루션
function solution(number, k) {
  let numStr = String(number);
  let numLength = numStr.length;
  let stack = [];
  let count = 0;

  for (let i = 0; i < numLength; i++) {
    let current = numStr[i];
    if (!stack.length) {
      stack.push(current);
      continue;
    }

    //stack의 쌓인 최근 값이 들어와야할 값보다 크거나 같을떄까지 꺼낸다..
    while (stack[stack.length - 1] < current) {
      stack.pop();
      count++; // 뺀자리 카운트
      // 인자값 대로 다 뺐다면 남은 숫자 다 꺼냄
      if (count === k) {
        return stack.join("") + numStr.substring(i, numLength);
      }

      if (stack.length === 0) {
        break;
      }
    }
    stack.push(current);
  }
  return stack.join("").substring(0, numLength - k);
}
// function solution(number, k) {
//   // * 스택에 값을 하나 씩 넣는데, 이미 존재하는 값
//   // * number 배열에서 N이 존재할 때까지 최대값
//   let answer = [];
//   let N = number.length - k;
//   let idx = 0;
//   let flag = false;
//   while (true) {
//     if (answer.length === N) {
//       break;
//     }
//     // * 최대값
//     let max = [];
//     for (let i = idx; i < idx + N; i++) {
//       max.push([number[i], i]);

//       if (number[i] === 9) {
//         flag = i;
//         break;
//       }

//       if (!number[i + N - answer.length]) {
//         break;
//       }
//     }
//     // * 최대값 정렬
//     if (flag) {
//       idx = i + 1;
//       answer.push(number[i]);
//       flag = false;
//     } else {
//       max.sort((a, b) => {
//         if (b[0] === a[0]) {
//           return a[1] - b[1];
//         }
//         return b[0] - a[0];
//       });

//       idx = max[0][1] + 1;
//       answer.push(max[0][0]);
//     }
//   }

//   return answer.join("");
// }
// function solution(number, k) {
//   // * 스플릿으로 나누고 number.length - k 조합을 구한다.
//   let N = number.length - k;
//   let answer = combination(
//     number.split("").map((num) => num),
//     N
//   ).sort((a, b) => parseInt(b.join("")) - parseInt(a.join("")));

//   return answer[0].join("");
// }

// function combination(arr, selectNum) {
//   const result = [];
//   if (selectNum === 1) return arr.map((v) => [v]);
//   arr.forEach((v, idx, arr) => {
//     const fixed = v;
//     const restArr = arr.slice(idx + 1);
//     const combinationArr = combination(restArr, selectNum - 1);
//     const combineFix = combinationArr.map((v) => [fixed, ...v]);
//     for (const value of combineFix) {
//       result.push(value);
//     }
//   });
//   return result;
// }

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(number, k));

// ! best
