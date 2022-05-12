// * 키패드 누르기
// const number = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
// const number = [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2];
// const number = [2, 5, 8, 0];
const number = [0, 0, 0, 0];
function solution(numbers, hand) {
  const phone = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    ["*", "0", "#"],
  ];
  const dy = [-1, 0, 1, 0];
  const dx = [0, 1, 0, -1];
  const isLeft = ["1", "4", "7"];
  const isRigth = ["3", "6", "9"];
  let answer = "";
  let left = "*";
  let right = "#";

  const checkIdx = (value, strNum) => {
    if (value === strNum) {
      return "check";
    }
    let res = [];
    phone.forEach((row, rowIdx) => {
      if (row.indexOf(value) !== -1) {
        res = [rowIdx, row.indexOf(value), 0];
      }
    });
    return res;
  };

  const bfs = (hand, end) => {
    const start = checkIdx(hand, end);
    if (start === "check") {
      return 0;
    }
    let queue = [];
    let visited = [...Array(4)].map(() => Array(3).fill(0));
    let idx = 0;
    let res = 0;
    queue.push(start);
    while (queue.length != idx) {
      const [y, x, cnt] = queue[idx++];
      for (let i = 0; i < 4; i++) {
        const ny = y + dy[i];
        const nx = x + dx[i];
        if (nx < 0 || nx >= 3 || ny < 0 || ny >= 4) continue;
        if (!visited[ny][nx]) {
          visited[ny][nx] = 1;
          if (phone[ny][nx] === end) {
            return cnt + 1;
          }
          queue.push([ny, nx, cnt + 1]);
        }
      }
      res = cnt;
    }
    return res;
  };

  numbers.forEach((number) => {
    const strNum = String(number);
    if (isLeft.includes(strNum)) {
      answer += "L";
      left = strNum;
    } else if (isRigth.includes(strNum)) {
      answer += "R";
      right = strNum;
    } else {
      const leftCnt = bfs(left, strNum);
      const rightCnt = bfs(right, strNum);
      console.log(`check: ${strNum} --- ${leftCnt} ${rightCnt}`);
      console.log(`hand: ${left} ${right}`);
      if (leftCnt === rightCnt) {
        const cur = hand === "right" ? "R" : "L";
        answer += cur;
        cur === "R" ? (right = strNum) : (left = strNum);
      } else if (rightCnt > leftCnt) {
        answer += "L";
        left = strNum;
      } else {
        answer += "R";
        right = strNum;
      }
    }
  });

  return answer;
}
console.log(solution(number, "left"));
