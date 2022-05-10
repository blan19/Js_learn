// * 문자열 분석
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

const input = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((el) => el.split(""));

function checkStr(arr) {
  let temp = Array.from(Array(4)).fill(0);
  arr.forEach((char) => {
    let code = char.charCodeAt();
    if (code >= 65 && code <= 90) {
      temp[1]++;
    } else if (code >= 97 && code <= 122) {
      temp[0]++;
    } else if (code >= 48 && code <= 57) {
      temp[2]++;
    } else if (char === " ") {
      temp[3]++;
    }
  });
  return temp;
}
const result = input.map((arr) => checkStr(arr));

console.log(result.map((res) => res.join(" ")).join("\n"));

// * 아스키 코드 대문자 65 ~ 90
// * 아스키 코드 소문자 97 ~ 122
// * 숫자 48 ~ 57
