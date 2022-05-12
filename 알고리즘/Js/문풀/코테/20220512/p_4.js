// const answers = [1, 2, 3, 4, 5];
const answers = [1, 3, 2, 4, 2];
// const answers = [3, 3, 2, 1, 5];
// const answers = [5, 5, 4, 2, 3];
// const answers = [1, 2];
// const answers = [4, 4, 4, 5, 1];
// const answers = [4, 4, 4, 5, 1, 5, 5, 4, 2, 3, 1];
function solution(answers) {
  let answer = [];
  const one = [1, 2, 3, 4, 5];
  const two = [2, 1, 2, 3, 2, 4, 2, 5];
  const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const people = [];
  const isCorrect = (pattern, size) => {
    let cnt = 0;
    let idx = 0;
    answers.forEach((answer, _idx) => {
      if (answer === pattern[idx]) {
        cnt++;
      }
      if (idx === size) {
        idx = 0;
      } else {
        idx++;
      }
    });
    return cnt;
  };
  people.push(
    { value: isCorrect(one, 4), kind: 1 },
    { value: isCorrect(two, 7), kind: 2 },
    { value: isCorrect(three, 9), kind: 3 }
  );
  people
    .sort((a, b) => {
      if (a.value === b.value) {
        return a.kind - b.kind;
      }
      return b.value - a.value;
    })
    .forEach((el, _, arr) => {
      if (el.value === arr[0].value) {
        answer.push(el.kind);
      }
    });
  return answer;
}

console.log(solution(answers));
