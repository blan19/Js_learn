// * 프로그래머스

// ! 인풋
const arr = [1, 1, 3, 3, 0, 1, 1];

// ! 솔루션
function solution(arr) {
  let answer = [];
  arr.forEach((num) => {
    if (!answer.length) {
      answer.push(num);
    }
    const prev = answer[answer.length - 1];
    prev === num ? false : answer.push(num);
  });
  return answer;
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(arr));

// ! best
