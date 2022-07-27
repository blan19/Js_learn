// * 프로그래머스

// ! 인풋
// const files = [
//   "img12.png",
//   "img10.png",
//   "img02.png",
//   "img1.png",
//   "IMG01.GIF",
//   "img2.JPG",
// ];

// const files = [
//   "F-5 Freedom Fighter",
//   "B-50 Superfortress",
//   "A-10 Thunderbolt II",
//   "F-14 Tomcat",
// ];

const files = [
  "img12.png",
  "img10.png",
  "img02.png",
  "img1.png",
  "IMG01.GIF",
  "im g01.jyp",
  "img123456789.jpg",
  "img2.JPG",
];

// ! 솔루션
// function solution(files) {
//   var answer = [];
//   answer = files.sort((a, b) => {
//     const first = a.toUpperCase().match(/\D+/gi)[0];
//     const second = b.toUpperCase().match(/\D+/gi)[0];
//     console.log(first);
//     if (first !== second) {
//       return first > second ? 1 : -1;
//     }

//     return +a.match(/\d+/gi)[0] - +b.match(/\d+/gi)[0];
//   });
//   return answer;
// }

function solution(files) {
  const transFiles = files.map((str, idx) => [
    ...split(str.toLowerCase()),
    idx,
    str,
  ]);

  return transFiles
    .sort(function (a, b) {
      if (a[0] === b[0]) {
        if (a[1] === b[1]) return a[2] > b[2] ? 1 : -1;
        return a[1] > b[1] ? 1 : -1;
      }
      return a[0] > b[0] ? 1 : -1;
    })
    .map((arr) => arr[3]);
}

function split(str) {
  const result = [];
  const arr = str.split("");
  let nums = "";
  arr.forEach((ch) => {
    if (nums.length < 5 && ch.charCodeAt() >= 48 && ch.charCodeAt() <= 57)
      nums += ch;
  });
  const [head] = str.split(nums);
  result.push(head, +nums);
  return result;
}

// ! 주의사항

// ! 로직
// * 먼저 소문자로 전체를 바꿔준다
// * 아스키값으로 숫자

// ! 아웃풋
// console.log(solution(files));
console.log("asdadv1231231".toLowerCase().match(/\d{1,5}/));

// ! best

// function solution(files) {
//   var answer = [];
//   answer = files.sort((a, b) => {
//     const first = a.toUpperCase().match(/\D+/gi)[0];
//     const second = b.toUpperCase().match(/\D+/gi)[0];
//     console.log(first);
//     if (first !== second) {
//       return first > second ? 1 : -1;
//     }

//     return +a.match(/\d+/gi)[0] - +b.match(/\d+/gi)[0];
//   });
//   return answer;
// }
