// 하나씩 비교해가면서 answer에 저장


function solution(arr){         
    let answer = [];
    let input = arr[4];

    for (let i = 0; i < arr.length; i++) {
        if (input <= arr[i]) {
            answer.push(arr[i]);
        }
    }
    return answer;
}

let arr=[7, 3, 9, 5, 6, 12];
console.log(solution(arr));

/*

function solution(arr){         
    let answer=[];
    answer.push(arr[0]);
    for(let i=1; i<arr.length; i++){
        if(arr[i]>arr[i-1]) answer.push(arr[i]);
        }
    return answer;
}

let arr=[7, 3, 9, 5, 6, 12];
console.log(solution(arr));

*/