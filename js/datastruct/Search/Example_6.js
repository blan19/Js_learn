// 단어 세기 목록 구현
// 해시테이블 사용

const string = "practice makes perfect. get perfect by practice. just practice.";

function hashfWordCount (str) {
    let wordList = str.replace(/[.]/g, "").split(" ");
    let length = wordList.length;
    let hash = {};

    if (wordList.length < 1) {
        return false;
    }

    // 해시테이블에 객체에 저장
    for (let i = 0; i < length; i++) {
        if (!hash[wordList[i]]) {
            hash[wordList[i]] = 1;
        } else {
            hash[wordList[i]]++;
        }
    }

    let tempWordArr = [];

    for (let key in hash) {
        tempWordArr.push([key, hash[key]]);
    }

    function compare (a, b) {
        return b[1] - a[1];
    }

    tempWordArr.sort(compare);

    let answer = {};

    tempWordArr.forEach((cur) => {
        answer[cur[0]] = cur[1];
    })

    return answer
}

console.log(hashfWordCount(string));