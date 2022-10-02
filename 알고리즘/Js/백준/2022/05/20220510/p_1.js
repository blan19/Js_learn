function solution(lottos, win_nums) {
  let answer = [];
  let isEqual = [];

  const zeroCnt = lottos.filter((number) => number === 0).length;

  win_nums.forEach((number) => {
    if (lottos.includes(number)) {
      isEqual.push(number);
      win_nums.slice(win_nums.indexOf(number), 1);
    }
  });

  const min = 7 - isEqual.length >= 6 ? 6 : 7 - isEqual.length;
  const max = zeroCnt === 6 ? 1 : 7 - (isEqual.length + zeroCnt);
  answer.push(max, min);

  return answer;
}

function solution(lottos, win_nums) {
  const result = [];

  let correctCnt = lottos.filter((num) => win_nums.includes(num)).length;
  let zeroCnt = lottos.filter((num) => num === 0).length;

  let minRank = 7 - correctCnt >= 6 ? 6 : 7 - correctCnt;
  let maxRank = zeroCnt === 6 ? 1 : minRank - zeroCnt;

  result.push(maxRank, minRank);

  return result;
}
