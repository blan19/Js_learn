function solution(s, t){
    let answer = 0;

    for (let x of s) {
        if (x === t) {
            answer+=1;
        }
    }
    return answer;
}

let str="COMPUTERPROGRAMMING";
console.log(solution(str, 'R'));

/*
function solution(s, t){
    let answer = 0;
    //split은 배열로 저장하니깐 넘버로 바꾸기 위해 length
    answer = s.split(t).length;
    //구분자이기 때문에 -1를 해준다
    return answer-1;
}

let str="COMPUTERPROGRAMMING";
console.log(solution(str, 'R'));
*/