// * 프로그래머스

// ! 인풋
// const m = "ABCDEFG",
//   musicinfos = ["12:00,12:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF"];

// const m = "CC#BCC#BCC#BCC#B",
//   musicinfos = ["03:00,03:30,FOO,CC#B", "04:00,04:08,BAR,CC#BCC#BCC#B"];

const m = "ABC",
  musicinfos = ["12:00,12:14,HELLO,C#DEFGAB", "13:00,13:05,WORLD,ABCDEF"];

// ! 솔루션
function solution(m, musicinfos) {
  let answer = [];
  const M = transM(m);

  musicinfos.forEach((data) => {
    const [start, end, title, order] = data.split(",");
    const music = transM(order);

    // * 시간 차 계산
    const [sH, sM] = start.split(":").map((el) => +el);
    const [eH, eM] = end.split(":").map((el) => +el);
    const progress = eH * 60 + eM - (sH * 60 + sM);

    // * 시간 차 보다 order가 크거나 작을 경우 문자열 처리
    const mul = parseInt(progress / music.length);
    const add = progress % music.length;
    const progressMusic = music.repeat(mul) + music.slice(0, add);

    if (progressMusic.includes(M)) answer.push([title, progress]);
  });

  if (!answer.length) return "(None)";

  return answer.sort((a, b) => b[1] - a[1])[0][0];
}

function transM(str) {
  const stk = [];
  str.split("").forEach((char) => {
    if (char === "#") {
      let t = stk[stk.length - 1];
      stk.pop();
      stk.push(t.toLowerCase());
    } else {
      stk.push(char);
    }
  });
  return stk.join("");
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(m, musicinfos));

// ! best
