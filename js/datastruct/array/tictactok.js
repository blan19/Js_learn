// 3x3 
// 행과 열 검사
// 대각선 검사
// 세개 연달아 같은 문자인 경우 true 반환

// 이전 값을 저장하고 같다면 트루, 아니면 펄스


function ticTacTok (array, who) {
    let leng = array.length;
    let temp = [];
    
    // 행 검사
    for (let i = 0; i < leng; i++) {
        for (let j = 0; j < leng; j++) {
            if ((array[i][j] !== who) || (array[j][i] !== who)) {
                return false;
            }
        }
    }
    return true;
}

let arr = [
    ["O", "X", "-"],
    ["O", "X", "O"],
    ["X", "X", "O"]
];

console.log(ticTacTok(arr, "X"));
