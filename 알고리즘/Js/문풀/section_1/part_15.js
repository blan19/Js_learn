// 문자열의 길이를 2로 나누어서 나머지가 0인지 확인
// 나머지가 0이 아니라면 몫의 인덱스를 반환
// 나머지가 0이라면 몫의 인덱스와 +1 인덱스 반환

/*
function solution(s) {
    let answer = "";
    let idx;

    if (s.length%2 !== 0) {
        idx = Math.ceil(s.length/2);
        answer = s[idx-1];
    } else if (s.length%2 === 0) {
        idx = Math.ceil(s.length/2);
        answer = s[idx-1] + s[idx];
    }

    return answer;
}

const string = "studys";
console.log(solution(string));
*/

function solution(s) {
    let answer = "";
    let idx = Math.floor(s.length/2);

    if (s.length%2 === 1) {
        answer = s.slice(idx, idx + 1);
    } else {
        answer = s.slice(idx-1, idx + 1)
    }

    

    return answer;
}

const string = "studyd";
console.log(solution(string));