// 위, 아래, 오른쪽, 왼쪽 조회하면서 보다 크다면 카운트
// 이중 for문 


function solution(arr){  
    let answer = 0;
    let n = arr.length;
    // 초기화시켜준다
    let dx = [-1, 0, 1, 0];
    let dy = [0, 1, 0, -1];

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            // 큰 값이 있는지 위한 확인 변수
            let flag = 1;
            for (let k = 0; k < 4; k++) {
                let nx = i + dx[k];
                let ny = j + dy[k];

                // 4방위 중에 배열 범위를 벗어나지 않게
                if (nx >= 0 && nx < n && ny >= 0 && ny < n && arr[i][j] < arr[nx][ny]) {
                    flag = 0;
                    break;
                }
            }

            if(flag) {
                answer++;
            }
        }
    }
    return answer;
}

let arr=[[5, 3, 7, 2, 3], 
         [3, 7, 1, 6, 1],
         [7, 2, 5, 3, 4],
         [4, 3, 6, 4, 1],
         [8, 7, 3, 5, 2]];
console.log(solution(arr));