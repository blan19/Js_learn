// 배열을 조회하면서 
// 배열의 요소가 1이라면 count
// answer에 누적
// 0이라면 sum은 그대로 카운터 초기화



function solution(arr){         
    let answer = 0;
    let check = 1;
    let count = 1;

    for (let x of arr) {
        if (check === x) {
            answer += count;
            count++;
        } else if (check !== x) {
            count = 1;
        }
    }

    return answer;
}

let arr=[1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));

/*


*/

