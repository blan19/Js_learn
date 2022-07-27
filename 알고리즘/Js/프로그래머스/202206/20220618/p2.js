// * 프로그래머스

// ! 인풋
const arr1 = [
    [1, 4],
    [3, 2],
    [4, 1],
  ],
  arr2 = [
    [3, 3],
    [3, 3],
  ];

// ! 솔루션
function solution(arr1, arr2) {
  let answer = Array.from(Array(arr1.length), () =>
    Array.from(Array(arr2[0].length)).fill(0)
  );

  arr1.forEach((matrixA, a1) => {
    [0, 1, 2];
    matrixA.forEach((numA, a2) => {
      for (let i = 0; i < arr2[0].length; i++) {
        answer[a1][i] += numA * arr2[a2][i];
      }
    });
  });

  return answer;
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(arr1, arr2));

// ! best
