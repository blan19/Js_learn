// * 문자열 분석
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

const input = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((el) => el.split(""));

console.log(input);

// * 아스키 코드 대문자 65 ~ 90
// * 아스키 코드 소문자 97 ~ 122
// * 숫자 48 ~ 57
