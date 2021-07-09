const input = [
  [21, "Junkyu"],
  [21, "Dohyun"],
  [20, "Sunyoung"],
];

// input[0] 내림차순
// 나이가 같다면 input[1] 인덱스값 내림차순

const sortedArr = input.sort((a, b) => {
  return a[0] - b[0] || input.indexOf(a) - input.indexOf(b);
});

console.log(sortedArr.join("\n").replace(/,/g, " "));
