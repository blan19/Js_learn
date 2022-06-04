// * 프로그래머스 - 두 개 뽑아서 더하기

// ! 인풋
// const numbers = [2, 1, 3, 4, 1];
const numbers = [5, 0, 2, 7];

// ! 솔루션
function solution(numbers) {
  const _set = new Set();
  numbers.forEach((number, idx, arr) => {
    for (let i = idx + 1; i < arr.length; i++) {
      _set.add(number + arr[i]);
    }
  });
  const answer = Array.from(_set).sort((a, b) => a - b);
  return answer;
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(numbers));

// ! best
