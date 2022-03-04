// 배열의 요소들을 하나씩 비교해가면서 max값과 비교
// 조회된 요소가 max값보다 크다면 answer 카운트


function solution(arr){         
    let answer = 0;
    max = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
            answer++;
        }
    }


    return answer;
}

let arr=[130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));