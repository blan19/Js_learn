// * 프로그래머스

// ! 인풋
const record = [
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
];

// ! 솔루션
function solution(record) {
  let answer = [];
  let res = [];
  let member = {};
  record.forEach((str) => {
    const arr = str.split(" ");
    const [type, uid, nickname] = arr;
    if (type === "Enter") {
      member[uid] = nickname;
      answer.push(`${uid} 들어왔습니다.`);
    } else if (type === "Change") {
      member[uid] = nickname;
    } else {
      answer.push(`${uid} 나갔습니다.`);
    }
  });
  answer.forEach((str) => {
    const [strId] = str.split(" ");
    res.push(str.replace(strId, `${member[strId]}님이`));
  });
  return res;
}

// ! 주의사항

// ! 로직
// * split으로 나누고 3번째가 존재한다면 닉네임

// ! 아웃풋
console.log(solution(record));

// ! best

// function solution(record) {
//   const userInfo = {};
//   const action = [];
//   const stateMapping = {
//     Enter: "님이 들어왔습니다.",
//     Leave: "님이 나갔습니다.",
//   };

//   record.forEach((v) => {
//     const [state, id, nick] = v.split(" ");

//     if (state !== "Change") {
//       action.push([state, id]);
//     }

//     if (nick) {
//       userInfo[id] = nick;
//     }
//   });

//   return action.map(([state, uid]) => {
//     return `${userInfo[uid]}${stateMapping[state]}`;
//   });
// }

// function solution(record) {
//   let ret = [];
//   const uids = new Map();

//   record.forEach((entry) => {
//     let [command, uid, nick] = entry.split(" ");
//     if (command === "Enter" || command === "Change") uids.set(uid, nick);
//   });

//   record.forEach((entry) => {
//     let [command, uid] = entry.split(" ");
//     if (command === "Enter") ret.push(`${uids.get(uid)}님이 들어왔습니다.`);
//     if (command === "Leave") ret.push(`${uids.get(uid)}님이 나갔습니다.`);
//   });

//   return ret;
// }
