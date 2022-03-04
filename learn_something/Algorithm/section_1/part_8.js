function solution(arr){
    /*

    배열 짝을 맞춰서 하나씩 비교
    이중포문 사용
    총값에서 배열의 짝을 빼서 === 100을 맞추고,
    배열에서 100이 나올 때 그 짝의 배열을 빼준다
    그리고 답 리턴

    */

    let answer = arr;
    let sum = answer.reduce((acc, v) => acc + v, 0);

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (sum - (arr[i] + arr[j]) === 100) {
                answer.splice(j, 1);
                answer.splice(i, 1);
            }
        }
    }

    return answer;
}

let arr=[20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));