// * 백준 - 피보나치 함수
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

// ! 인풋
const input = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((el) => +el);

// ! 솔루션
const [t, ...n] = input;

for (let i = 0; i < t; i++) {
  let answer = Array.from(Array(2)).fill(0);
  const fibo = (n) => {
    if (n === 0) {
      answer[0]++;
      return 0;
    } else if (n === 1) {
      answer[1]++;
      return 1;
    } else {
      return fibo(n - 2) + fibo(n - 1);
    }
  };
  fibo(n[i]);
  console.log(answer[0], answer[1]);
}

// ! 주의사항

// ! 로직

// ! 아웃풋

// ! best
