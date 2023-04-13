// * 프로그래머스

// ! 인풋

// ! 솔루션
function solution(maps) {
  const start = findStart(maps);
  const lever = findLever(maps);

  const minLevelToLever = bfs(maps, start, "L");
  const minLevelToExit = bfs(maps, lever, "E");

  if (minLevelToLever === -1 || minLevelToExit === -1) return -1;

  return minLevelToLever + minLevelToExit;
}

function findStart(maps) {
  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[0].length; j++) {
      if (maps[i][j] === "S") return [i, j];
    }
  }
}

function findLever(maps) {
  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[0].length; j++) {
      if (maps[i][j] === "L") return [i, j];
    }
  }
}

function bfs(matrix, start, target) {
  const row = matrix.length;
  const col = matrix[0].length;

  const visited = Array.from({ length: row }, () =>
    Array.from({ length: col }).map(() => false)
  );

  const queue = [[...start, 0]];
  const dx = [1, -1, 0, 0],
    dy = [0, 0, 1, -1];

  visited[start[0]][start[1]] = true;

  while (queue.length > 0) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const [x, y, level] = queue.shift();

      if (matrix[x][y] === target) return level;

      for (let j = 0; j < 4; j++) {
        const nx = x + dx[j];
        const ny = y + dy[j];

        if (
          nx >= 0 &&
          nx < row &&
          ny >= 0 &&
          ny < col &&
          matrix[nx][ny] !== "X"
        ) {
          if (!visited[nx][ny]) {
            visited[nx][ny] = true;
            queue.push([nx, ny, level + 1]);
          }
        }
      }
    }
  }

  return -1;
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(["SOOOO", "XXXXX", "LOOOO", "XXXXX", "EOOOO"]));

// ! best
