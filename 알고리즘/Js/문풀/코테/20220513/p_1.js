// * 체육복
// ! 인풋
// 1
// const n = 5;
// const lost = [2, 4];
// const reserve = [1, 3, 5];

// 2
// const n = 5;
// const lost = [2, 4];
// const reserve = [3];

// 3
const n = 10;
const lost = [1, 5, 6, 7, 10];
const reserve = [1, 4, 5, 6, 7];

// ! 솔루션
// function solution(n, lost, reserve) {
//   let answer = 0;
//   const arr = Array.from(Array(n)).fill(1);
//   reserve.forEach((idx) => {
//     arr[idx - 1] = 2;
//   });
//   lost.forEach((idx) => {
//     if (arr[idx - 1] === 2) {
//       arr[idx - 1] = arr[idx - 1] - 1;
//     } else {
//       arr[idx - 1] = 0;
//     }
//   });

//   arr.forEach((clothe, idx, arr) => {
//     if (clothe === 0) {
//       if (idx === 0) {
//         if (arr[idx + 1] === 2) {
//           arr[idx + 1] = arr[idx + 1] - 1;
//           arr[idx] = arr[idx] + 1;
//         }
//       } else if (idx === arr.length - 1) {
//         if (arr[idx - 1] === 2) {
//           arr[idx - 1] = arr[idx - 1] - 1;
//           arr[idx] = arr[idx] + 1;
//         }
//       } else {
//         if (arr[idx - 1] === 2) {
//           arr[idx - 1] = arr[idx - 1] - 1;
//           arr[idx] = arr[idx] + 1;
//         } else if (arr[idx + 1] === 2) {
//           arr[idx + 1] = arr[idx + 1] - 1;
//           arr[idx] = arr[idx] + 1;
//         }
//       }
//     }
//   });
//   arr.forEach((clothe) => clothe >= 1 && answer++);
//   return answer;
// }

// ! 주의사항
// ! 학생들의 번호는 체격 순으로 매겨져 있어, 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다.
// ! 전체 학생의 수는 2명 이상 30명 이하입니다.
// ! 체육복을 도난당한 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
// ! 여벌의 체육복을 가져온 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
// ! 여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다. 이때 이 학생은 체육복을 하나만 도난당했다고 가정하며,
// ! 남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다.

// ! 로직
// * 1. 먼저 n 만큼의 길이를 가진 배열을 만들고 1 값으로 초기화한다
// * 2. lost 배열 안의 인덱스를 가진 값은 0으로, reserve는 2로

// ! best solution
function solution(n, lost, reserve) {
  return (
    n -
    lost.filter((a) => {
      const b = reserve.find((r) => Math.abs(r - a) <= 1);
      if (!b) return true;
      reserve = reserve.filter((r) => r !== b);
    }).length
  );
}

// ! 아웃풋
console.log(solution(n, lost, reserve));
