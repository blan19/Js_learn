// * 프로그래머스 - [1차] 비밀지도

// ! 인풋
const n = 5;
const arr1 = [9, 20, 28, 18, 11];
const arr2 = [30, 1, 21, 17, 28];

// ! 솔루션
const trans = (number) => {
  let str = Array.from(Array(5)).fill("0");
  let cnt = 0;
  while (number) {
    let target = number % 2;
    str[cnt++] = String(target);
    number = Math.floor(number / 2);
  }
  return str.reverse();
};
function solution(n, arr1, arr2) {
  let answer = [];
  for (let i = 0; i < n; i++) {
    const [a, b] = [trans(arr1[i]), trans(arr2[i])];
    let str = "";
    for (let j = 0; j < n; j++) {
      Number(a[j]) + Number(b[j]) > 0 ? (str += "#") : (str += " ");
    }
    answer.push(str);
  }
  return answer;
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(n, arr1, arr2));

// ! best
