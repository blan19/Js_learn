// * 프로그래머스

// ! 인풋
const msg = "KAKAO";
// const msg = "TOBEORNOTTOBEORTOBEORNOT";

// ! 솔루션
function solution(msg) {
  let answer = [];
  let arr = msg.split("");
  let dict = new Map();
  let end = 26;

  msg.split("").forEach((ch) => {
    if (!dict.has(ch)) {
      dict.set(ch, trans(ch));
    }
  });

  while (arr.length) {
    let output = 0;
    let sum = 1;
    // * 사전에 등록이 안되어있는걸 발견할 떄까지 반복하면서 출력값을 바꿔준다
    while (sum <= arr.length) {
      if (dict.has(arr.slice(0, sum).join(""))) {
        output = dict.get(arr.slice(0, sum).join(""));
        sum++;
      } else {
        dict.set(arr.slice(0, sum).join(""), ++end);
        break;
      }
    }

    answer.push(output);

    arr.splice(0, sum - 1);
  }

  return answer;
}

function trans(ch) {
  return ch.charCodeAt() - 64;
}
// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(msg));

// ! best
