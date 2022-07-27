// * 프로그래머스

// ! 인풋
// const n = 3,
//   words = [
//     "tank",
//     "kick",
//     "know",
//     "wheel",
//     "land",
//     "dream",
//     "mother",
//     "robot",
//     "tank",
//   ];

// const n = 5,
//   words = [
//     "hello",
//     "observe",
//     "effect",
//     "take",
//     "either",
//     "recognize",
//     "encourage",
//     "ensure",
//     "establish",
//     "hang",
//     "gather",
//     "refer",
//     "reference",
//     "estimate",
//     "executive",
//   ];

const n = 2,
  words = ["hello", "one", "even", "never", "now", "world", "draw"];

// ! 솔루션
function solution(n, words) {
  // * 스택을 하나 만들고, 그 배열엔 지나간 단어를 저장한다.
  // * 사람 수 만큼의 배열을 만들고 그 배열에 단어 들을 저장한다.
  // * 만약 스택에 단어가 이미 존재한다면 인덱스와 배열 길이 리턴
  const stk = [];

  for (let i = 0; i < words.length; i++) {
    // * 전 단어와 현 단어 비교해서 다를 경우
    if (
      stk.length &&
      stk[stk.length - 1][stk[stk.length - 1].length - 1] !== words[i][0]
    ) {
      const leng = i + 1;
      const number = leng % n === 0 ? n : leng % n;
      const cycle = Math.ceil(leng / n);
      return [number, cycle];
    }

    // * 스택에 값이 있는지 확인
    const exist = stk.indexOf(words[i]);
    if (exist !== -1) {
      const leng = i + 1;
      const number = leng % n === 0 ? n : leng % n;
      const cycle = Math.ceil(leng / n);
      return [number, cycle];
    }

    stk.push(words[i]);
  }

  return [0, 0];
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(n, words));

// ! best
