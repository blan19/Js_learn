// * 프로그래머스

// ! 인풋
const info = [
    "java backend junior pizza 150",
    "python frontend senior chicken 210",
    "python frontend senior chicken 150",
    "cpp backend senior pizza 260",
    "java backend junior chicken 80",
    "python backend senior chicken 50",
  ],
  query = [
    "java and backend and junior and pizza 100",
    "python and frontend and senior and chicken 200",
    "cpp and - and senior and pizza 250",
    "- and backend and senior and - 150",
    "- and - and - and chicken 100",
    "- and - and - and - 150",
  ];

// ! 솔루션
// function solution(info, query) {
//   let answer = [];
//   const apply = info
//     .map((data) => data.split(" "))
//     .map((data) => [+data.pop(), data.join("")])
//     .sort((a, b) => b[0] - a[0]);

//   const search = query.map((data) =>
//     data
//       .split("and")
//       .join("")
//       .replace(/\-/g, "")
//       .split(" ")
//       .filter((char) => char !== "")
//   );

//   // 서치 배열
//   search.forEach((data, idx, origin) => {
//     let res = [...apply];
//     let temp = [];

//     //서치 하나씩
//     res = res.filter(
//       ([grade, _]) => grade >= parseInt(origin[idx][origin[idx].length - 1])
//     );

//     if (origin[idx].length !== 1) {
//       data.forEach((list, idx, arr) => {
//         // res 배열에 서치에 해당하는거 검사
//         res.forEach(([grade, str]) => {
//           const reg = new RegExp(list);
//           if (idx === arr.length - 1) {
//             if (grade >= parseInt(list)) {
//               temp.push([grade, str]);
//             }
//           } else {
//             if (str.match(reg)) {
//               temp.push([grade, str]);
//             }
//           }
//         });

//         res = temp;
//         temp = [];
//       });
//     } else {
//       temp = res;
//     }

//     answer.push(res.length);
//     res = [];
//   });

//   return answer;
// }

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(info, query));

// ! best
function solution(info, query) {
  let answer = [];

  function combination(arr, selectNum) {
    const result = [];
    if (selectNum === 1) return arr.map((v) => [v]);
    arr.forEach((v, idx, arr) => {
      const fixed = v;
      const restArr = arr.slice(idx + 1);
      const combinationArr = combination(restArr, selectNum - 1);
      const combineFix = combinationArr.map((v) => [fixed, ...v]);
      result.push(...combineFix);
    });
    return result;
  }

  function binarySearch(arr, target) {
    let left = 0,
      right = arr.length;
    while (left < right) {
      const mid = parseInt((left + right) / 2);
      if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    return left;
  }

  const info_score = new Map();
  info_score.set("", []);

  info.forEach((str) => {
    str = str.split(" ");
    const score = str[str.length - 1];
    str.pop();
    info_score.get("").push(+score);

    for (let i = 1; i <= 4; i++) {
      const comb = combination("0123".split(""), i);

      comb.forEach((idx) => {
        const key = idx.map((v) => str[+v]).join("");
        if (info_score.has(key)) {
          info_score.get(key).push(+score);
        } else {
          info_score.set(key, [+score]);
        }
      });
    }
  });

  for (const [_, value] of info_score) {
    value.sort((a, b) => a - b);
  }

  query.forEach((str) => {
    str = str.replace(/\sand\s|\-/gi, "").split(" ");
    const key = str[0],
      score = +str[1];
    if (info_score.has(key)) {
      const scores = info_score.get(key);

      console.log("map", scores);
      console.log("target", score);
      const index = binarySearch(scores, score);
      console.log("결과", scores.length - index);
      answer.push(scores.length - index);
    } else {
      answer.push(0);
    }
  });

  return answer;
}
