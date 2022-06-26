// // * 백준
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../../5.txt";

// // ! 인풋
// const [N, M, BK] = fs.readFileSync(filePath).toString().split("\n");
const [inputN, caseN, ...BrokenBtn] = fs
  .readFileSync(filePath)
  .toString()
  .split("\n");

// // ! 솔루션
// const solution = (N, M, BK) => {
//   let r = 0;
//   let minT = "";
//   let maxT = "";
//   const number = [];
//   let breakDown = null;
//   if (N === 100) return 0;
//   if (BK === undefined) breakDown = [];
//   else breakDown = BK.split(" ").map((el) => +el);

//   for (let i = 0; i <= 9; i++) {
//     if (breakDown.indexOf(i) === -1) number.push(i);
//   }

//   N.split("").forEach((ch, idx, origin) => {
//     const target = +ch;

//     // * 리모콘에 번호가 있는지 체크
//     if (number.indexOf(target) !== -1) {
//       const max = Math.max(...number.map((num) => Math.abs(target - num)));
//       const adj =
//         number.indexOf(max + target) !== -1 ? target + max : target - max;
//       r++;
//       minT += String(target);
//       maxT += String(adj);
//     } else {
//       const min = Math.min(...number.map((num) => Math.abs(target - num)));
//       const adj =
//         number.indexOf(min + target) !== -1 ? target + min : target - min;
//       minT += String(adj);
//       maxT += String(adj);
//       r++;
//     }

//     // * 인덱스가 끝일 경우
//     if (idx === origin.length - 1) {
//       r += Math.min(Math.abs(N - minT), Math.abs(N - maxT));
//     }
//   });

//   return Math.min(r, Math.abs(N - 100));
// };

// // ! 주의사항

// // ! 로직

// // ! 아웃풋
// console.log(solution(N, M, BK));

// // ! best

// const [inputN, caseN, ...BrokenBtn] = require("fs")
//   .readFileSync("/dev/stdin", "utf8")
//   .trim()
//   .split("\n");
console.log(solution());

function solution() {
  let onlyUpDown = Math.abs(100 - +inputN);
  if (onlyUpDown === 0) return 0;

  let min = 987654321;
  let count = 0;

  const troubleBtn = +caseN ? BrokenBtn[0].split(" ") : [];

  for (let i = 0; i <= 999999; i++) {
    const str = String(i);
    let check = true;

    for (let j = 0, n = str.length; j < n; j++) {
      if (troubleBtn.includes(str[j])) {
        check = false;
        break;
      }
    }
    if (!check) {
      continue;
    }
    count = str.length + Math.abs(i - +inputN);
    min = Math.min(min, count);
  }
  return Math.min(onlyUpDown, min);
}
