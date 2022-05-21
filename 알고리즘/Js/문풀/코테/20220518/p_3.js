// * 프로그래머스

// ! 인풋
// const s = "a234";
const s = "12345";

// ! 솔루션
function solution(s) {
  if (s.length === 4 || s.length === 6) {
  } else {
    return false;
  }
  return s.match(/[^0-9]/g) ? false : true;
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(s));

// ! best
