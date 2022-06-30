// * 프로그래머스

// ! 인풋
// const genres = ["classic", "pop", "classic", "classic", "pop"],
//   plays = [500, 600, 150, 800, 2500];

// const genres = ["A", "A", "B", "A", "B", "B", "A", "A", "A", "A"],
//   plays = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

// const genres = ["classic", "pop", "classic", "pop", "classic", "classic"],
//   plays = [400, 600, 150, 600, 500, 500];

const genres = ["classic", "classic", "classic", "classic", "pop"];
plays = [500, 150, 800, 800, 2500];

// ! 솔루션
function solution(genres, plays) {
  let answer = [];
  let arr = [];
  let orders = {};
  let hash = new Map();
  genres.forEach((genre, idx) => {
    if (hash.has(genre)) hash.get(genre).push([idx, plays[idx]]);
    else hash.set(genre, [[idx, plays[idx]]]);

    if (orders[genre]) orders[genre] += plays[idx];
    else orders[genre] = plays[idx];
  });

  for (const [key, value] of hash) {
    arr.push([key, value]);
  }

  arr = arr.map((val) => [
    val[0],
    val[1].sort((a, b) => {
      if (a[1] === b[1]) {
        return a[0] - b[0];
      }
      return b[1] - a[1];
    }),
  ]);

  orders = Object.entries(orders).sort((a, b) => b[1] - a[1]);

  orders.forEach((val) => {
    const [g, _] = val;
    const idx = arr.findIndex((el) => el[0] === g);
    if (arr[idx][1].length === 1) {
      answer.push(arr[idx][1][0][0]);
    } else {
      answer.push(arr[idx][1][0][0], arr[idx][1][1][0]);
    }
  });

  return answer;
}

// ! 주의사항

// ! 로직
// * 속한 노래가 가장 많은 장르별 순
// * 장르 중에서 가장 많이 재생된 노래
// * 횟수가 같다면 인덱스 낮은거
// * 두개씩, 길이가 1이라면 하나만

// ! 아웃풋
console.log(solution(genres, plays));

// ! best
