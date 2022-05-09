// t가 아닌 것을 만나면 count++ t를 만나면 count 초기화 시키며 for문
// 위 조건을 역순으로 한번 더 반복
// 역순으로 나온 배열을 reverse() 해주고 정순의 배열과 크기 비교
// 크기가 작은 것을 answer에 push

/*

function solution(s, t){
    let answer = [];
    let answer1=[];
    let answer2=[];
    let count = 0;
    let len = s.length;

    for (let i = 0; i < len; i++) {
        if (s[i] === t) {
            count = 0;
        } else {
            count++;
        }
        answer1.push(count);
    }

    for(let i = len - 1; i >= 0; i--) {
        if (s[i] === t) {
            count = 0;
        } else {
            count++;
        }
        answer2.push(count);
    }

    answer2.reverse();

    for (let i = 0; i < len; i++) {
        if (answer1[i] < answer2[i]) {
            answer.push(answer1[i]);
        } else {
            answer.push(answer2[i]);
        }
    }
    let final = answer.join("");
    return final;
}

let str="teachermode";
console.log(solution(str, 'e'));


/*
function solution(s, t){
    let answer=[];
    let p=1000;
    for(let x of s){
        if(x===t){
            p=0;
            answer.push(p);
        }
        else{
            p++;
            answer.push(p);
        }
    }

    console.log(answer);

    p=1000;
    for(let i=s.length-1; i>=0; i--){
        if(s[i]===t) p=0;
        else{
            p++;
            answer[i]=Math.min(answer[i], p);
        }
    }
    return answer;
}

let str="teachermode";
console.log(solution(str, 'e'));

*/

function solution(s, t){
    let answer = [];
    let answer1=[];
    let count = 0;
    let len = s.length;

    for (let i = 0; i < len; i++) {
        if (s[i] === t) {
            count = 0;
        } else {
            count++;
        }
        answer1.push(count);
    }
    count = 0;

    for(let i = len - 1; i >= 0; i--) {
        if (s[i] === t) {
            count = 0;
        } else {
            count++;
        }
        answer[i] = Math.min(answer1[i], count);
    }

    return answer;
}

let str="teachermode";
console.log(solution(str, 'e'));
