// 문자열을 조회한 후에
// 같은 문자열이 1개를 초과할 경우
// 초과한 문자열 반환
// 조회된 문자열을 기존 문자열에서 제거
// 중복된 문자열이 없을떄까지 반복

// indexOf를 사용해서 제일 처음 발견된 것만 넣어주면
// 결국엔 중복문자는 없어진다.
// 조건문을 사용해 이미 있는 경우는 스킵

/*
function solution(s) {
    let answer = "";

    for (let i = 0; i < s.length - 1; i++) {
        for (let j = 1 + i; j < s.length; j++) {
            if (s[i] === s[j]) {
                s.replace(s[j], "");
            }
        }
    }
    answer = s;
    return answer;
}

const string = "ksekkset";
console.log(solution(string));
*/

function solution(s) {
    let answer = "";

    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) === i) {
            answer += s[i];
        }
    }

    return answer;
}

const string = "ksekkset";
console.log(solution(string));