// * 프로그래머스

// ! 인풋
// const arr = [
//   [1, 1, 0, 0],
//   [1, 0, 0, 0],
//   [1, 0, 0, 1],
//   [1, 1, 1, 1],
// ];

const arr = [
  [0, 0],
  [0, 0],
];

// ! 솔루션
function solution(arr) {
  let answer = [];

  function quad(y, x, size) {
    let ret = "";
    let v = arr[y][x];

    if (size === 1) return String(v);

    for (let i = y; i < y + size; i++) {
      for (let j = x; j < x + size; j++) {
        if (v !== arr[i][j]) {
          // * 값이 일정하지 않을 떄
          ret += quad(y, x, size / 2);
          ret += quad(y, x + size / 2, size / 2);
          ret += quad(y + size / 2, x, size / 2);
          ret += quad(y + size / 2, x + size / 2, size / 2);
          return ret;
        }
      }
    }

    return String(v);
  }

  const q = quad(0, 0, arr.length);

  answer.push(q.split("1").join("").length, q.split("0").join("").length);

  return answer;
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(arr));

// ! best
