// 배열 요소를 하나씩 조회하면서 요소를 분해
// 분해 후 더한 값을 맥스 값이랑 비교해서 맥스보다 크다면 저장하고 인덱스도 저장
// 가장 큰 값의 인덱스 반환


/*

function solution(n, arr){
    let answer, max=Number.MIN_SAFE_INTEGER;

    for (let x of arr) {
        let sum = 0;
        let value = String(x).split("");
        let len = value.length;

        //reduce 함수를 사용할 수도 있다는 것을 기억하자!
        //String(x).split("").reduce((a,b) => a + Number(b), 0);
        
        for (let i = 0; i < len; i++) {
            sum += Number(value[i]);
        }

        if (max < sum) {
            max = sum;
            answer = x;
        } else if (max === sum) {
            if (answer < x) {
                answer = x;
            }
        }
    }

    return answer;
}

let arr=[128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));

*/

function solution(n, arr){
    let answer, max=Number.MIN_SAFE_INTEGER;
    for(let x of arr){
        let sum=0, tmp=x;
        while(tmp){
            sum+=(tmp%10);
            tmp=Math.floor(tmp/10);
            console.log(sum);
        }
        if(sum>max){
            max=sum;
            answer=x;
        }
        else if(sum===max){
            if(x>answer) answer=x;
        }
    }
    return answer;
}

let arr=[128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));

