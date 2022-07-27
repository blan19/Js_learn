// * 백준
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";

let input = fs.readFileSync(filePath).toString().trim().replace(/9/gi, "6");
let number = [0, 1, 2, 3, 4, 5, 6, 6, 7, 8];
let need = [];
let cnt = 0;

input.split("").forEach((ch) => {
  let target = +ch;
  let exist = need.indexOf(target);

  // * 가지고 있는 세트에 값이 존재하지 않는 경우
  if (exist === -1) {
    cnt++;
    need = [...need, ...number];
    let num = need.indexOf(target);
    need.splice(num, 1);
  } else {
    need.splice(exist, 1);
  }
});

console.log(cnt);
