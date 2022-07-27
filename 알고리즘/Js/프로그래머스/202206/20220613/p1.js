// * 프로그래머스

// ! 인풋
const skill = "CBD",
  skill_trees = ["BACDE", "CBADF", "AECB", "BDA"];

// ! 솔루션
function solution(skill, skill_trees) {
  let answer = 0;
  // * arr 배열 루프를 돌면서 order 배열에 속한 값이 answer 배열에 넣을 때, 존재하는지 확인하고 인덱스 비교한다
  // * 인덱스가 역순이라면 잘못된 스킬트리

  skill_trees.forEach((tree) => {
    const arr = tree.split("");
    const order = skill.split("");
    let flag = false;
    for (let i = 0; i < arr.length; i++) {
      // * 현재 스킬이 order에 존재하던 값이라면, stk에도 존재하는지 확인하고 존재한다면 인덱스 비교
      if (order.length && order.includes(arr[i])) {
        if (0 === order.indexOf(arr[i])) {
          order.shift();
        } else {
          flag = true;
          break;
        }
      }
    }

    if (!flag) {
      answer++;
    }
  });

  return answer;
}
// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(skill, skill_trees));

// ! best
