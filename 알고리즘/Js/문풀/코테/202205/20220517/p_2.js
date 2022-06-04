// * 프로그래머스

// ! 인풋
const dartResult = "1S2D*3T";
// const dartResult = "1D2S#10S";

// ! 솔루션
function solution(dartResult) {
  const bonus = ["", "S", "D", "T"];
  const option = ["*", "#"];
  let nums = [];
  let etc = [];
  let temp = "";
  dartResult.split("").forEach((char) => {
    if (char.charCodeAt() >= 48 && char.charCodeAt() <= 57) {
      if (char === "0" && nums[nums.length - 1] === "1") {
        nums[nums.length - 1] = "10";
      } else {
        nums.push(char);
      }
      if (temp) {
        etc.push(temp);
        temp = "";
      }
    } else if (option.includes(char)) {
      if (char === "*") {
        nums[nums.length - 1] *= 2;
        nums[nums.length - 2] *= 2;
      } else {
        nums[nums.length - 1] *= -1;
      }
    } else {
      nums[nums.length - 1] = nums[nums.length - 1] ** bonus.indexOf(char);
    }
  });
  etc.push(temp);
  return nums.reduce((acc, cur) => acc + cur, 0);
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(dartResult));

// ! best
// function solution(dartResult) {
//   const bonus = { S: 1, D: 2, T: 3 },
//     options = { "*": 2, "#": -1, undefined: 1 };

//   let darts = dartResult.match(/\d.?\D/g);

//   for (let i = 0; i < darts.length; i++) {
//     let split = darts[i].match(/(^\d{1,})(S|D|T)(\*|#)?/),
//       score = Math.pow(split[1], bonus[split[2]]) * options[split[3]];

//     if (split[3] === "*" && darts[i - 1]) darts[i - 1] *= options["*"];

//     darts[i] = score;
//   }

//   return darts.reduce((a, b) => a + b);
// }
