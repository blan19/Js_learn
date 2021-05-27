// 회문 문자열
// for문을 돌려면 첫번째랑 마지막이랑 비교 
// i++
// 앞뒤로 스트링이 같다

function solution(s){
    let answer="YES";

    s = s.toLowerCase();

    if (s.split("").reverse().join("") !== s) {
        return "No";
    }

    return answer;
}

let str="goooG";
console.log(solution(str));