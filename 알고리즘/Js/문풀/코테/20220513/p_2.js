// * 프로그래머스

// ! 인풋
// const nums = [3, 1, 2, 3];
// const nums = [3, 3, 3, 2, 2, 4];
const nums = [3, 3, 3, 2, 2, 2];
// const nums = [3, 3, 3, 3];
// const nums = [1, 2, 3, 4, 2, 6];

// ! 솔루션

function solution(nums) {
  let answer = 0;
  const n = nums.length / 2;
  const filteredNums = Array.from(new Set(nums));
  if (n < filteredNums.length) {
    answer = n;
  } else {
    answer = filteredNums.length;
  }
  return answer;
}

// ! 주의사항

// ! 아웃풋
console.log(solution(nums));

// * 솔루션
// * nums는 무조건 짝수
// * nums 배열의 길이 / 2

// * 필터된 배열은 n보다 작을수있다.
// * 이런 경우는

// * n은 3이지만, 필터 배열은 2
// * 더 작은 경우에는 필터 배열의 길이를 리턴
