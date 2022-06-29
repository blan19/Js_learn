// * 프로그래머스

// ! 인풋
// const dirs = "ULURRDLLU";
const dirs = "LULLLLLLU";

// ! 솔루션
function solution(dirs) {
  let answer = 1;
  let pos = [5, 5];
  const N = 11;
  let map = Array.from(Array(N), () => Array.from(Array(N)).fill(0));
  map[5][5] = 1;

  dirs.split("").forEach((dir) => {
    pos = move(dir, pos);
    if (map[pos[0]][pos[1]] === 0) {
      // console.log(pos, dir);
      map[pos[0]][pos[1]] = 1;
      answer++;
    }
  });

  return answer;
}

function move(ch, pos) {
  const [y, x] = moveHnadler(pos);

  console.log(pos, ch);
  if ((x < 0 && ch === "L") || (x >= 11 && ch === "R")) return pos;
  else if ((y < 0 && ch === "D") || (y >= 11 && ch === "U")) return pos;
  else return [y, x];

  function moveHnadler(pos) {
    switch (ch) {
      case "U":
        pos[0] = pos[0] - 1;
        return pos;
      case "D":
        pos[0] = pos[0] + 1;
        return pos;
      case "R":
        pos[1] = pos[1] + 1;
        return pos;
      case "L":
        pos[1] = pos[1] - 1;
        return pos;
      default:
        return;
    }
  }
}

// ! 주의사항

// ! 로직
// * 맵 범위에서 초과하거나 음수로 x 조건
// * 방문했다면 1, 1일 경우 카운트 x

// ! 아웃풋
console.log(solution(dirs));

// ! best
