// 배열의 인덱스 순서대로 a와 b 비교
// 조건에 따라서 answer에 누적

// 숫자가 같을 경우 
// 보일떄 가위 경우의 수

/*
function solution(a, b){         
    let answer="";

    for (let i = 0; i < 5; i++) {
        if ((a[i] === b[i])) {
            answer += "D";
        } else if (((a[i] === 2) && (b[i] === 1)) ||
        ((a[i] === 3) && (b[i] === 2)) ||
        ((a[i] === 1) && (b[i] === 3))) {
            answer += "A";
        } else if (((a[i] === 2) && (b[i] === 3)) ||
        ((a[i] === 3) && (b[i] === 1)) ||
        ((a[i] === 1) && (b[i] === 2))) {
            answer += "B";
        }
    }
    return answer;
}

let a=[2, 3, 3, 1, 3];
let b=[1, 1, 2, 2, 3];
console.log(solution(a, b));
*/

function solution(a, b){         
    let answer="";

    for (let i = 0; i < 5; i++) {
        if ((a[i] === b[i])) {
            answer += "D";
        } else if (((a[i] === 2) && (b[i] === 1)) ||
        ((a[i] === 3) && (b[i] === 2)) ||
        ((a[i] === 1) && (b[i] === 3))) {
            answer += "A";
        } else {
            answer += "B";
        }
    }
    return answer;
}

let a=[2, 3, 3, 1, 3];
let b=[1, 1, 2, 2, 3];
console.log(solution(a, b));
