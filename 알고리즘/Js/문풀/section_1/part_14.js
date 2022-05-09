function solution(s){  
    //배열에 있는 문자열들을 하나씩 문자열의 길이로 숫자화하고
    //크기 비교
    //가장큰 문자열을 answer 변수에 할당
    let answer="";
    let max = s[0];

    for (let x of s) {
        if (max.length < x.length) {
            max = x;
        }
    }
    answer = max;
    return answer;
}
let str=["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));