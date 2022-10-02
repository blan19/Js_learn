// * 프로그래머스

// ! 인풋

// ! 솔루션
function solution(number, k) {
  const stk = [];
  let cnt = 0;
  number.split("").forEach((v) => {
    while (cnt < k && stk[stk.length - 1] < v) {
      cnt++;
      stk.pop();
    }
    stk.push(v);
  });

  while (cnt < k) {
    cnt++;
    stk.pop();
  }
  return stk.join("");
}

// ! 주의사항

// ! 로직
// * 매번 첫 번째 숫자와 다음 숫자를 비교해서 첫 번째 숫자가 작다면 k - 1
// * 요소 체인지

// ! 아웃풋
console.log(solution("12", 1));

// ! best
