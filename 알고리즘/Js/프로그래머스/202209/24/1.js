function isDot(str) {
  if (str.includes(".")) return true;
  return false;
}

function isBadWord(str, dict) {
  if (dict.indexOf(str) !== -1) return true;
  return false;
}

function formatFromDotToBadWord(str, dict, k) {
  let flag = false;
  const formatDot = str.replace(/[^\.]+/g, "");
  const formatStr = str.split(".").filter((ch) => ch !== "");

  dict.forEach((badword) => {
    let temp = badword;
    formatStr.forEach((word) => {
      temp = temp.replace(word, "");
    });
    if (temp !== badword && temp.length <= formatDot.length * k) flag = true;
    if (!formatStr.length && temp.length <= formatDot.length * k) flag = true;
    if (!temp.length && formatDot.length) flag = false;
  });

  return flag;
}

function solution(k, dic, chat) {
  const chatting = chat;
  const dict = dic;
  const answer = [];

  chatting.split(" ").forEach((str) => {
    if (isDot(str)) {
      if (formatFromDotToBadWord(str, dict, k))
        answer.push("#".repeat(str.length));
      else answer.push(str);
    } else if (isBadWord(str, dict)) answer.push("#".repeat(str.length));
    else answer.push(str);
  });

  return answer.join(" ");
}

// console.log(
//   solution(2, ["slang", "badword"], "badword ab.cd bad.ord .word sl.. bad.word")
// );
console.log(solution(3, ["abcde", "cdefg", "efgij"], ".. ab. cdefgh .gi. .z."));

// * .은 1 이상 k 이하

// * .이 존재한다면 나쁜 단어가 만들어지는지 확인하는 함수
// * .을 제외한 단어 제거하고 만들어지는지 확인
// * 아니라면 나쁜 단어와 겹치는지 확인
