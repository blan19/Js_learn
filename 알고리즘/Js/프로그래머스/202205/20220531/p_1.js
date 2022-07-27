// * 프로그래머스

// ! 인풋
// const numbers = [1, 1, 1, 1, 1];
// const target = 3;

const numbers = [4, 1, 2, 1];
const target = 4;

// const numbers = [1, 2, 1, 2];
// const target = 2;

// const numbers = [1, 2, 1, 2];
// const target = 6;

// ! 솔루션
function solution(numbers, target) {
  let answer = 0;
  let cnt = 0;
  const goal = (numbers.reduce((acc, cur) => acc + cur, 0) - target) / 2;

  function combination(arr, selectNum) {
    const result = [];
    if (selectNum === 1) return arr.map((v) => [v]);
    arr.forEach((v, idx, arr) => {
      const fixed = v;
      const restArr = arr.slice(idx + 1);
      const combinationArr = combination(restArr, selectNum - 1);
      const combineFix = combinationArr.map((v) => [fixed, ...v]);
      result.push(...combineFix);
    });
    return result;
  }

  while (true) {
    cnt++;
    if (cnt > numbers.length) {
      break;
    }
    combination(numbers, cnt).forEach(
      (number) => number.reduce((acc, cur) => acc + cur, 0) === goal && answer++
    );
  }

  return answer;
}

// ! 주의사항

// ! 로직
// * 경우의 수로 어떻게 해결하지?
// * [+,-]
// * 먼저 배열 값을 다 더한하고 타켓 값과의 차를 구해보자
// * 4 + 1 + 2 + 1 = 8 - 4 = 4
// * 1 + 1 + 1 + 1 + 1 = 5 - 3 = 2
// * 배열에서 타겞 값과의 차가 나올 경우의 수만 구하면 되지 않을까?...
// * 구한 값은 카운트..!

// *

// ! 아웃풋
console.log(solution(numbers, target));

// ! best

// let arr;
// let goal;
// let ctr = 0;
// function solution(numbers, target) {
//   arr = numbers;
//   goal = target;
//   search(0, 0);
//   return ctr;
// }
// function search(num, sum) {
//   if (num == arr.length) {
//     if (sum == goal) ctr++;
//     return;
//   }
//   search(num + 1, sum + arr[num]);
//   search(num + 1, sum - arr[num]);
// }

function solution(numbers, target) {
  let answer = 0;
  getAnswer(0, 0);
  function getAnswer(x, value) {
    if (x < numbers.length) {
      getAnswer(x + 1, value + numbers[x]);
      getAnswer(x + 1, value - numbers[x]);
    } else {
      if (value === target) {
        answer++;
      }
    }
  }
  return answer;
}
