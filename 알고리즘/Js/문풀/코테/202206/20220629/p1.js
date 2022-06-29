// * 프로그래머스

// ! 인풋
const dirs = "ULURRDLLU";
// const dirs = "LULLLLLLU";

// ! 솔루션
function solution(dirs) {
  let answer = 0;
  let pos = [5, 5];
  const N = 11;
  let map = Array.from(Array(N), () => Array.from(Array(N)).fill(0));
  let set = new Set();
  map[5][5] = 1;

  dirs.split("").forEach((dir) => {
    const [y, x] = pos;
    pos = move(dir, y, x);
    const [ny, nx] = pos;

    if (
      !set.has(`${y}${x}${ny}${nx}`) &&
      !set.has(`${ny}${nx}${y}${x}`) &&
      `${y}${x}${ny}${nx}` !== `${ny}${nx}${y}${x}`
    ) {
      set.add(`${y}${x}${ny}${nx}`);
      set.add(`${ny}${nx}${y}${x}`);
      answer++;
    }
  });

  return answer;
}

function move(ch, y, x) {
  const [ny, nx] = moveHnadler(y, x);

  if ((nx < 0 && ch === "L") || (nx >= 11 && ch === "R")) return [y, x];
  else if ((ny < 0 && ch === "D") || (ny >= 11 && ch === "U")) return [y, x];
  else return [ny, nx];

  function moveHnadler(y, x) {
    switch (ch) {
      case "U":
        return [y - 1, x];
      case "D":
        return [y + 1, x];
      case "R":
        return [y, x + 1];
      case "L":
        return [y, x - 1];
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

function solution(dirs) {
  var answer = 0;
  let p = [0, 0];
  const visit = [];

  for (let i of dirs) {
    const cur_p = p.slice();
    if (i == "U" && p[1] < 5) p[1]++;
    else if (i == "D" && p[1] > -5) p[1]--;
    else if (i == "R" && p[0] < 5) p[0]++;
    else if (i == "L" && p[0] > -5) p[0]--;

    const st = p.join("") + cur_p.join("");
    const nd = cur_p.join("") + p.join("");

    if (!visit.includes(st) && st != nd) {
      visit.push(st);
      visit.push(nd);
    }
  }
  answer = visit.length / 2;
  return answer;
}
