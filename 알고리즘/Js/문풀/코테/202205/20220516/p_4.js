// * 프로그래머스 - 부족한 금액 계산하기

// ! 인풋
const price = 3;
const money = 20;
const count = 4;

// ! 솔루션
function solution(price, money, count) {
  let sum = 0;
  for (let i = 1; i <= count; i++) {
    sum += price * i;
  }
  return money > sum ? 0 : sum - money;
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(price, money, count));

// ! best

// function solution(price, money, count) {
//   const tmp = (price * count * (count + 1)) / 2 - money;
//   return tmp > 0 ? tmp : 0;
// }
