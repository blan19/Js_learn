// 문자가 반복이 되면 count++;
// count가 1은 그냥 넣어주고 아니라면 가장 큰 값을 바로 다음에 넣어주고 초기화
// 

/*

function solution (str) {
    let answer = "";
    let count = 1;
    let len = str.length;

    for (let i = 0; i < len; i++) {
        if (count === 1) {
            answer += str[i];
        }

        if (str[i] === str[i + 1]) {
            count++;
        } else if ((str[i] !== str[i + 1]) && count > 1) {
            answer += count;
            count = 1;
        } else {
            count = 1;
        }

    }

    return answer;
}

let string = "KKHSSSSSSSE";
console.log(solution(string));

*/

function solution(s){
    let answer="";
    let cnt=1;
    // 마지막 대상인 E가 비교할 대상이 있어야 하기 떄문
    s=s+" ";
    for(let i=0; i<s.length-1; i++){
        if(s[i]===s[i+1]) cnt++;
        else{
            answer+=s[i];
            if(cnt>1) answer+=String(cnt);
            cnt=1;
        }
    }
    return answer;
}

let str="KKHSSSSSSSE";
console.log(solution(str));