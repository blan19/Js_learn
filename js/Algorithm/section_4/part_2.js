// 배열 요소를 하나씩 확인하고 하나씩 뒤집어준다
// 뒤집어준 값을 소수인지 확인하고 소수라면 빈 배열에 저장하고 리턴

/*
function isPrime (n) {
    if (n <= 1) {
        return false;
    }
    
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

function solution(arr){
    let answer = [];

    for (let x of arr) {
        let value = String(x).split('').reverse().join('');

        if (isPrime(value) === true) {
            answer.push(parseInt(value));
        }
    }

    return answer;
}

let arr=[32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));

*/


function isPrime(num){
    if(num===1) return false;
    for(let i=2; i<=parseInt(Math.sqrt(num)); i++){
        if(num%i===0) return false;
    }
    return true;
}

function solution(arr){
    let answer=[];
    for(let x of arr){
        let res=0;
        while(x){
            let t=x%10;
            res=res*10+t;
            x=parseInt(x/10);
        }
        if(isPrime(res)) answer.push(res);
    }
    return answer;
}

let arr=[32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));

