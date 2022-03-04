
function solution(n){
    let answer;

    if (n%12 !== 0) {
        answer = (n/12) + 1;
    } else {
        answer = n/12;
    }

    answer = parseInt(answer);

    return answer;
}

console.log(solution(178));



/*
function solution(n){

    let answer;
    answer=Math.ceil(n/12);
    return answer;
    
}

console.log(solution(178));
*/