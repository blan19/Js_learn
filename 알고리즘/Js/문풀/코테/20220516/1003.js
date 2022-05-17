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
const [t, ...inp] = input;

for (let i = 0; i < t; i++) {
  const n = inp[i];

  const fibonacci = [
    [1, 0],
    [0, 1],
  ];

  for (let j = 2; j <= n; j++) {
    fibonacci[j] = [
      fibonacci[j - 1][0] + fibonacci[j - 2][0],
      fibonacci[j - 1][1] + fibonacci[j - 2][1],
    ];
  }

  console.log(fibonacci[n].join(" "));
}

// ! 주의사항

// ! 로직

// ! 아웃풋

// ! best
