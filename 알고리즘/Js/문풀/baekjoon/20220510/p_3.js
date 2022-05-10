// * 숫자 문자열과 영단어

function solution(s) {
  let answer = "";
  let str = "";
  const numArr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  s.split("").forEach((char) => {
    if (char.charCodeAt() >= 97 && char.charCodeAt() <= 122) {
      str += char;
      if (numArr.includes(str)) {
        answer += numArr.indexOf(str);
        str = "";
      }
    } else {
      answer += char;
    }
  });
  return Number(answer);
}

// ! 미친 띵킹
function solution(s) {
  let numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  var answer = s;

  for (let i = 0; i < numbers.length; i++) {
    let arr = answer.split(numbers[i]);
    answer = arr.join(i);
  }

  return Number(answer);
}

console.log(solution("one4seveneight"));
