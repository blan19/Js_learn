function solution(s){         
    let answer=0;

    for (let x of s) {
        if (x===x.toUpperCase()) {
            answer++;
        }
    }

    return answer;
}

let str="KoreaTimeGood";
console.log(solution(str));

//유니코드 내에서 대문자 범위 탐색후 카운트
//let num=x.charCodeAt();
//if(num>=65 && num<=90) answer++;