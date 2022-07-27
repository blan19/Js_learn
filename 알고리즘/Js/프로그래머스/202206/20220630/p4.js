// const x = 10;
const x = 18;

function solution(x) {
  let str = String(x).split("");
  let num = 0;

  str.forEach((ch) => {
    num += +ch;
  });

  if (x % num === 0) return true;
  else return false;
}

console.log(solution(x));
