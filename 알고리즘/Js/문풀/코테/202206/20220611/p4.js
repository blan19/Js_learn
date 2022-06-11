// * 프로그래머스

// ! 인풋
// const brown = 10,
//   yellow = 2;

// const brown = 8,
//   yellow = 1;

const brown = 24,
  yellow = 24;

// ! 솔루션
function combination(arr, selectNum) {
  const result = [];
  if (selectNum === 1) return arr.map((v) => [v]);
  arr.forEach((v, idx, arr) => {
    const fixed = v;
    const restArr = arr.slice(idx + 1);
    const combinationArr = combination(restArr, selectNum - 1);
    const combineFix = combinationArr.map((v) => [fixed, ...v]);
    result.push(...combineFix);
  });
  return result;
}

function solution(brown, yellow) {
  let answer = [0, 0];
  const N = brown + yellow;
  const _map = new Map();
  const nums = Array.from(Array(N)).map((_, idx) => idx + 1);

  combination(nums, 2).forEach(([a, b]) => {
    if (a * b === N) {
      if (!_map.has(Math.max(a, b), Math.min(a, b))) {
        _map.set(Math.max(a, b), Math.min(a, b));
      }
    }
  });

  for (let i = 1; i <= N; i++) {
    if (i * i === N) {
      _map.set(i, i);
    }
  }

  for (const [key, value] of _map) {
    if (answer[1] < value) {
      answer = [key, value];
    }
  }

  return answer;
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(brown, yellow));

// ! best
function solution(brown, yellow) {
  let answer = [];
  let sum = brown + yellow;

  for (let height = 3; height <= brown; height++) {
    if (sum % height === 0) {
      let weight = sum / height;
      if ((height - 2) * (weight - 2) === yellow) {
        return [weight, height];
      }
    }
  }
  return answer;
}
