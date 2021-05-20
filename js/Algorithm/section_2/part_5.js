// 가장 큰 인덱스 값 누적
// 그 후 가장 큰 인덱스를 배열에서 제거
// 반복


function solution(arr){  
    let answer = [1, 1, 1, 1, 1];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                answer[i] += 1;
            }
        }
    }

    return answer;
}

let arr=[87, 89, 92, 100, 76];
console.log(solution(arr));

