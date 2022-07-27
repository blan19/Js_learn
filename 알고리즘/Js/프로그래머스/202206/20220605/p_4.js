// * 프로그래머스

// ! 인풋
// const name = "JAZ";
// const name = "JEROEN";
// const name = "JAN";
const name = "BBBBAAAABA";

// ! 솔루션
function solution(name) {
  var answer = 0;
  const length = name.length;
  let upDownCount = 0;
  let leftRightCountList = [length - 1]; //한 방향으로 쭉 갔을 때
  for (let i = 0; i < length; i++) upDownCount += minUpOrDownCount(name[i]);
  for (let startOfA = 0; startOfA < name.length; startOfA++) {
    let endOfA = startOfA + 1;
    while (endOfA < length && name[endOfA] === "A") endOfA++;
    const [moveToStartOfA, moveToEndOfA] = [startOfA, length - endOfA];
    leftRightCountList.push(moveToStartOfA * 2 + moveToEndOfA); // 0 -> A.., 0 <- A.., ..A <- -1
    leftRightCountList.push(moveToEndOfA * 2 + moveToStartOfA); //시작부터 뒤로 가는 경우 ..A <- -1, ..A -> -1, 0 -> A..
  }
  answer = upDownCount + Math.min(...leftRightCountList);
  return answer;
}

function minUpOrDownCount(destination) {
  const Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const index = Alphabet.indexOf(destination);
  return Math.min(index, Alphabet.length - index);
}

// function solution(name) {
//   let str = name
//     .split("")
//     .map(() => "A")
//     .join("");

//   let last = 0;
//   let cnt = 0;

//   str.split("").forEach((char, idx) => {
//     if (char !== name[idx]) {
//       // 아스키 값
//       const cur = char.charCodeAt();
//       const target = name[idx].charCodeAt();
//       // 인덱스 계산
//       const left = idx - last;
//       const right = last + (name.length - 1 - idx);
//       const idxMin = Math.min(left, right);
//       // 위 아래 계산
//       const go = target - cur;
//       const back = cur - 65 + (90 - target) + 1;
//       const min = Math.min(go, back);

//       console.log(idxMin);
//       cnt += min + idxMin;
//       last = idx;
//     }
//   });
//   return cnt;
// }

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(name));

// ! best
