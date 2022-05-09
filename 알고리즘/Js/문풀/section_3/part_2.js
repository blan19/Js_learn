// 소문자로 변환 -> 특수문자 제거
// 맨처음과 맨뒤 문자를 앞뒤로 늘리고 줄여가며 하나씩 비교
// 같지않다면 No 반환 같다면 answer 반환

/*

function solution(s){
    let answer="YES";
    let reg = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
    s = s.toLowerCase();
    let re1 = s.replace(reg, "").split(" ").join("");

    for (let i = 0; i < Math.floor(re1.length/2); i++) {
        if (re1[i] !== re1[re1.length - i - 1]) {
            return "No";
        }
    }

    return answer;
}

let str="found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));

*/

function solution(s){
    let answer="YES";

    // ^이것은 부정 g는 글로벌 영역 ''은 빈문자열로 -> 소문자 a-z가 아닌것은 빈문자열로 정규식 사용//
    s=s.toLowerCase().replace(/[^a-z]/g, '');
    if(s.split('').reverse().join('')!==s) return "NO";
    return answer;
}

let str="found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));