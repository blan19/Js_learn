// * 프로그래머스

// ! 인풋
const s = "pPoooyY";

// ! 솔루션
function solution(s) {
  let result = [0, 0];
  const target = ["p", "y"];
  const str = s.toLowerCase();
  str
    .split("")
    .forEach((char) =>
      target.includes(char) ? result[target.indexOf(char)]++ : null
    );
  if (result[0] === 0 && result[1]) {
    return false;
  } else if (result[0] === result[1]) {
    return true;
  } else {
    return false;
  }
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(s));

// ! best

function numPY(s) {
  return (
    s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
  );
}
