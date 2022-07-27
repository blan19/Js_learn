// * 프로그래머스
// const user_id = ["frodo", "fradi", "crodo", "abc123", "frodoc"],
//   banned_id = ["fr*d*", "abc1**"];

// const user_id = ["frodo", "fradi", "crodo", "abc123", "frodoc"],
//   banned_id = ["*rodo", "*rodo", "******"];

const user_id = ["frodo", "fradi", "crodo", "abc123", "frodoc"],
  banned_id = ["fr*d*", "*rodo", "******", "******"];

// ! 인풋

// ! 솔루션
function solution(user_id, banned_id) {
  const similar = [];
  const db = new Map();
  const ban = new Map();
  user_id.forEach((user) => {
    // * 순회하면서 유저 아이디의 모든 조합 수 체크
    const nums = Array.from(Array(user.length))
      .fill(0)
      .map((_, idx) => idx);
    for (let i = 1; i <= user.length; i++) {
      const comb = combination(nums, i);

      // * 조합에 따라 밴의 경우의 수를 하나 하나 만들어준다
      comb.forEach((orders) => {
        let temp = user.split("");
        orders.forEach((v) => {
          temp[v] = "*";
        });
        temp = temp.join("");
        // * db에 중복 체크하면서 저장
        if (db.has(temp)) db.set(temp, db.get(temp) + 1);
        else db.set(temp, 1);
      });
    }
  });

  // * 밴 아이디 중복 체크
  banned_id.forEach((banned) => {
    if (ban.has(banned)) ban.set(banned, ban.get(banned) + 1);
    else ban.set(banned, 1);
  });

  // * 밴 먹은 유저와 아이디 유사 체크
  for (const [key, value] of ban) {
    const nums = Array.from(Array(value))
      .fill(0)
      .map((_, idx) => idx);

    if (value > 1) {
      const leng = combination(nums, db.get(key)).length;
      similar.push(leng);
    } else {
      similar.push(db.get(key));
    }
  }

  return similar.reduce((acc, cur) => acc + cur, 0) - (similar.length - 1);
}

function combination(arr, select) {
  const result = [];
  if (select === 1) return arr.map((v) => [v]);
  arr.forEach((val, idx, origin) => {
    const fixed = val;
    const restArr = origin.filter((_, index) => index !== idx);
    const combArr = combination(restArr, select - 1);
    const combineFix = combArr.map((val) => [fixed, ...val]);
    result.push(...combineFix);
  });

  return result;
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(user_id, banned_id));

// ! best
