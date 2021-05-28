function solution(str){
    let answer="";
    answer = str.toLowerCase().replace(/[a-z]/g, '');
    
    return parseInt(answer);
}

let str="g0en2T0s8eSoft";
console.log(solution(str));