// * 프로그래머스

// ! 인풋
// const progresses = [93, 30, 55];
// const speeds = [1, 30, 5];

const progresses = [95, 90, 99, 99, 80, 99];
const speeds = [1, 1, 1, 1, 1, 1];

// ! 솔루션
function solution(progresses, speeds) {
  let answer = [];
  let cnt = 0;
  progresses.forEach((num, idx, arr) => (arr[idx] = 100 - num));
  speeds.forEach(
    (num, idx, arr) => (arr[idx] = Math.ceil(progresses[idx] / num))
  );
  let max = speeds[0];
  speeds.forEach((num) => {
    if (max < num) {
      max = num;
      answer.push(cnt);
      cnt = 1;
    } else {
      cnt++;
    }
  });
  answer.push(cnt);
  return answer;
}

// ! 주의사항
// * 또, 각 기능의 개발속도는 모두 다르기 때문에 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발될 수 있고,
// * 이때 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포됩니다.

// ! 로직
// * 각 프로그래스 배열 값을 100에서 빼준다
// * 그 후 그 값을 스피드 배열의 동일한 인덱스 값과 나눠 새로운 배열에 저장한다
// * 새로운 배열을 뒤집고 뒷 인덱스 값보다 작거나 같다면 카운트하고 새로운 배열에 저장, 크다면 다시 카운트

// ! 아웃풋
console.log(solution(progresses, speeds));

// ! best

// function solution(progresses, speeds) {
//   let answer = [0];
//   let days = progresses.map((progress, index) =>
//     Math.ceil((100 - progress) / speeds[index])
//   );
//   let maxDay = days[0];

//   for (let i = 0, j = 0; i < days.length; i++) {
//     if (days[i] <= maxDay) {
//       answer[j] += 1;
//     } else {
//       maxDay = days[i];
//       answer[++j] = 1;
//     }
//   }

//   return answer;
// }
