// * 프로그래머스

// ! 인풋
const relation = [
  ["100", "ryan", "music", "2"],
  ["200", "apeach", "math", "2"],
  ["300", "tube", "computer", "3"],
  ["400", "con", "computer", "4"],
  ["500", "muzi", "music", "3"],
  ["600", "apeach", "music", "2"],
];

// const relation = [
//   ["100", "100", "ryan", "music", "2"],
//   ["200", "200", "apeach", "math", "2"],
//   ["300", "300", "tube", "computer", "3"],
//   ["400", "400", "con", "computer", "4"],
//   ["500", "500", "muzi", "music", "3"],
//   ["600", "600", "apeach", "music", "2"],
// ];

// ! 솔루션
// function solution(relation) {
//   let answer = [];
//   let keys = [];

//   function combination(arr, selectNum) {
//     const result = [];
//     if (selectNum === 1) return arr.map((v) => [v]);
//     arr.forEach((v, idx, arr) => {
//       const fixed = v;
//       const restArr = arr.slice(idx + 1);
//       const combinationArr = combination(restArr, selectNum - 1);
//       const combineFix = combinationArr.map((v) => [fixed, ...v]);
//       result.push(...combineFix);
//     });
//     return result;
//   }

//   for (let t = 1; t <= 4; t++) {
//     const unique = new Map();
//     const comb = combination("0123".split(""), t).map((val) => val.join(""));
//     // 조합
//     comb.forEach((val) => {
//       // 조합에 맞춰 스트링 값 저장할 임시 변수
//       let str = "";

//       // 릴레이션
//       relation.forEach((row) => {
//         val.split("").forEach((char) => {
//           str += row[+char];
//         });

//         // 맵에 중복 값 확인하면서 삽입
//         if (unique.has(val)) {
//           unique.set(val, { ...unique.get(val), [str]: str });
//         } else {
//           unique.set(val, { [str]: str });
//         }

//         // 임시 스트링 초기화
//         str = "";
//       });
//     });

//     for (const [key, value] of unique) {
//       const leng = Object.keys(value).length;

//       if (leng >= relation.length) {
//         keys.push(key);
//       }
//     }
//   }

//   keys.forEach((str) => {
//     combination(str.split(""), str.length).forEach((v) => {
//       let flag = false;
//       if (answer.length) {
//         answer.forEach((a) => {
//           a.map((b) => {
//             if (v.includes(b)) {
//               flag = true;
//             }
//           });
//         });

//         if (!flag) {
//           answer.push(v);
//         }
//       } else {
//         answer.push(v);
//       }
//     });
//   });

//   return answer.length;
// }

// ! 주의사항

// ! 로직
// * row 길이 만큼 조합을 구한다
// * map에 모든 경우의 수를 넣는다
// * 길이가 1인 것만 가져오고 값 오름차순 정렬
// * 단계 별로 이전 값을 포함하지 않는다면 최소상 만족 x
// * 최종 필터링 값 리턴

// ! 아웃풋
console.log(solution(relation));

// ! best

//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(relation) {
  //1. 가능한 조합을 1개~Attribute개수 만큼 찾는다.
  //2. 해당 개수의 조합이 키가 될 수 있는지 검사하고, 가능하면 후보키에 추가한다.
  //3. 단 추가하려고 할 때, 후보키에 있는 값이 자신의 부분 집합이 될 수 있으면 추가하지 않는다.
  const keys = [];
  const totalAttrCount = relation[0].length;
  const indexList = Array.from(Array(totalAttrCount), (x, index) => index); // [0,1,2,3 ... totalAttrCount-1]

  //Fn for 2. 해당 조합으로 각 row의 attribute를 모았을 때 중복이 있는지를 반환하는 함수
  const isUnique = (relation, attrIndexComb) => {
    let result = Array.from(Array(relation.length), (x) => "");
    for (const attrIndex of attrIndexComb) {
      relation.forEach((row, rowIndex) => (result[rowIndex] += row[attrIndex])); //Set를 이용해 중복 검사를 하기 위해 result에 string으로 넣음.
    }
    return result.length === [...new Set(result)].length;
  };

  //Fn for 3. keys에 현재 구한 검사할 조합의 부분집합이 존재하는지 반환, 단 keys에 들어있는 각 조합의 크기는 현재 검사할 조합의 크기보다 작다.
  const isMinimal = (attrComb) => {
    for (const key of keys)
      if (key.every((attr) => attrComb.includes(attr))) return false;
    return true;
  };

  //가능한 모든 조합을 검사
  for (let attrCount = 1; attrCount <= totalAttrCount; attrCount++) {
    const combinations = getCombinations(indexList, attrCount);
    for (const attrComb of combinations) {
      console.log(attrComb);
      if (isMinimal(attrComb) && isUnique(relation, attrComb))
        keys.push(attrComb);
    }
  }

  return keys.length;
}

//Fn for 1. 조합을 반환하는 함수
function getCombinations(array, selectNumber) {
  const result = [];
  if (selectNumber === 1) {
    return array.map((element) => [element]);
  }
  array.forEach((fixed, index, origin) => {
    const restCombinations = getCombinations(
      origin.slice(index + 1),
      selectNumber - 1
    );
    const attached = restCombinations.map((restCombination) => [
      fixed,
      ...restCombination,
    ]);
    result.push(...attached);
  });
  return result;
}
