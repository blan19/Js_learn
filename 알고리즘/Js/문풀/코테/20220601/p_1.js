// * 프로그래머스

// ! 인풋
// const orders = ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"];
// const course = [2, 3, 4];

// const orders = ["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"];
// const course = [2, 3, 5];

// const orders = ["XYZ", "XWY", "WXA"];
// const course = [2, 3, 4];

// const orders = ["ABCD", "ABCD", "ABCD"];
// const course = [2, 3, 4];

const orders = [
  "ABCDE",
  "AB",
  "CDAB",
  "ABDE",
  "XABYZ",
  "ABXYZ",
  "ABCD",
  "ABCDE",
  "ABCDE",
  "ABCDE",
  "AB",
  "AB",
  "AB",
  "AB",
  "AB",
  "AB",
  "AB",
  "AB",
  "AB",
  "AB",
];

const course = [2];

// ! 솔루션
function solution(orders, course) {
  let answer = [];
  let hash = {};
  let max = 0;

  function combination(arr, selectNum) {
    const result = [];
    if (selectNum === 1) return arr.map((v) => [v]);
    arr.forEach((v, idx, arr) => {
      const fixed = v;
      const restArr = arr.slice(idx + 1);
      const combinationArr = combination(restArr, selectNum - 1);
      const combineFix = combinationArr.map((v) => [fixed, ...v]);
      combineFix.length
        ? result.push(
            ...combineFix.map((str) =>
              str.sort((a, b) => a.charCodeAt() - b.charCodeAt())
            )
          )
        : result.push(...combineFix);
    });
    return result;
  }

  course.forEach((pick) => {
    orders.forEach((order) => {
      combination(order.split(""), pick)
        .map((com) => com.join(""))
        .forEach((com) => {
          if (hash[com]) hash[com]++;
          else hash[com] = 1;
          max = Math.max(max, hash[com]);
        });
    });
    if (max >= 2) {
      for (const [key, value] of Object.entries(hash)) {
        if (value === max) answer.push({ key, value });
      }
    }
    hash = {};
    max = 0;
  });

  return answer
    .sort((a, b) => {
      if (a.key.charCodeAt() === b.key.charCodeAt()) {
        let idx = 1;
        const len = b.key.length < a.key.length ? b.key.length : a.key.length;
        for (let i = 1; i < len; i++) {
          if (a.key[i].charCodeAt() !== b.key[i].charCodeAt()) {
            idx = i;
            break;
          }
        }
        return a.key[idx].charCodeAt() - b.key[idx].charCodeAt();
      }
      return a.key.charCodeAt() - b.key.charCodeAt();
    })
    .map(({ key }) => key);
}
// ! 주의사항

// ! 로직
// * orders 배열 요소를 split하고 course의 값 경우의 수를 다 저장하며 진행한다
// * 진행하면서 중복된 경우의 수는 cnt++

// ! 아웃풋
console.log(solution(orders, course));

// ! best
