// * 프로그래머스

// ! 인풋
const people = [70, 50, 80, 50],
  limit = 100;

// ! 솔루션
function solution(people, limit) {
  // * 보트에 탈 수 있는 사람은 2명!
  // * 투 포인터로 계산해보자
  const arr = people.sort((a, b) => b - a);
  let answer = 0;
  let left = 0,
    rigth = people.length - 1;

  if (arr.length === 1) {
    return 1;
  }

  while (left <= rigth) {
    if (arr[left] + arr[rigth] <= limit) {
      answer++;
      left++;
      rigth--;
    } else {
      left++;
      answer++;
    }
  }

  return answer;
}

// ! 주의사항

// ! 로직
// * 스택에 배열 형태로 값을 넣는다.
// * 루프를 돌면서 스택에 값을 꺼내며, 넣을 값을 넣는다면 한계치를 넘는지 안 넘는지 확인한다.

// ! 아웃풋
console.log(solution(people, limit));

// ! best
