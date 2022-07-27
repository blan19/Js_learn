// * 백준
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "../../input.txt";
const input = fs.readFileSync(filePath).toString();

// ! 인풋
const [N, r, c] = input.split(" ");

// ! 솔루션
const solution = (N, r, c) => {
  const size = Math.pow(2, N);
  let cnt = 0;

  const search = (x, y, depth) => {
    if (depth === 0) return;

    const size = Math.floor(Math.pow(2, depth - 1) / 2);
    const add = Math.pow(4, depth - 1);

    if (r < x && c < y) search(x - size, y - size, depth - 1);
    else if (r < x && c >= y) {
      cnt += add;
      search(x - size, y + size, depth - 1);
    } else if (r >= x && c < y) {
      cnt += add * 2;
      search(x + size, y - size, depth - 1);
    } else {
      cnt += add * 3;
      search(x + size, y + size, depth - 1);
    }
  };

  search(size / 2, size / 2, N);

  return cnt;
};

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(N, r, c));

// ! best
