// * 프로그래머스

// ! 인풋
const n = 9,
  wires = [
    [1, 3],
    [2, 3],
    [3, 4],
    [4, 5],
    [4, 6],
    [4, 7],
    [7, 8],
    [7, 9],
  ];

// ! 솔루션
function solution(n, wires) {
  let abs = 0;
  let answer = [];
  for (let i = 0; i < n; i++) {
    // * 전선 하나씩 자르면서 갯수 카운트 시작
    const temp = wires.map((el) => el.slice());
    temp.splice(i, 1);
    let visited = Array.from(Array(n + 1)).fill(false);
    let graph = makeGraph(temp, n);
    let res = [];

    for (let i = 1; i < n; i++) {
      if (visited[i]) continue;
      res.push(dfs(graph, visited, i, 0));
    }

    answer.push([...res]);
  }

  answer = answer.map((arr) => arr.map((el) => (el === 0 ? 1 : el)));

  answer.sort((a, b) => {
    if (a.length < 2 && b.length >= 2) {
      return Math.abs(a[0] - 1) - Math.abs(b[0] - b[1]);
    }
    if (b.length < 2 && a.length >= 2) {
      return Math.abs(a[0] - a[1]) - Math.abs(b[0] - 1);
    }
    if (b.length < 2 && a.length < 2) {
      return Math.abs(a[0] - 1) - Math.abs(b[0] - 1);
    }
    return Math.abs(a[0] - a[1]) - Math.abs(b[0] - b[1]);
  });

  if (answer[0].length < 2) {
    return Math.abs(answer[0][0] - 1);
  }
  if (answer[0].length === 2) {
    return Math.abs(answer[0][0] - answer[0][1]);
  }
}

function dfs(graph, visited, pos, cnt) {
  for (let i = 0; i < graph[pos].length; i++) {
    const npos = graph[pos][i];
    if (visited[npos]) continue;
    visited[npos] = true;
    cnt = dfs(graph, visited, npos, cnt + 1);
  }

  return cnt;
}

function makeGraph(arr, n) {
  let graph = Array.from(Array(n + 1), () => []);

  for (const [to, from] of arr) {
    graph[to].push(from);
    graph[from].push(to);
  }

  return graph;
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(n, wires));

// ! best
