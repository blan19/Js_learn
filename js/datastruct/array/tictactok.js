// 앞뒤 비교해서 같다면 count++ 
// 카운트가 2가 있다면 true


function ticTacTok (array) {
    let leng = array.length;
    let count;
    
    // 행 검사
    for (let i = 0; i < leng; i++) {
        count = 0;
        for (let j = 0; j < leng - 1; j++) {
            if ((array[i][j] === array[i][j + 1])) {
                count++;
                if (count === 2) {
                    console.log(array[i][j + 1]);
                    return true;
                }
            }
        }
    }

    // 열 검사
    for (let i = 0; i < leng; i++) {
        count = 0;
        for (let j = 0; j < leng - 1; j++) {
            if ((array[j][i] === array[j + 1][i])) {
                count++;
                if (count === 2) {
                    console.log(array[j + 1][i]);
                    return true;
                }
            }
        }
    }

    count = 0;

    for (let i = 0; i < leng - 1; i++) {
        if (array[i][i] === array[i + 1][i + 1]) {
            count++;
            if (count === 2) {
                console.log(array[i + 1][i + 1]);
                return true;
            }
        }
    }

    count = 0;

    for (let i = 0; i < leng - 1; i++) {
        if (array[i][leng - 1 - i] === array[i + 1][leng - 1 - (i + 1)]) {
            count++;
            if (count === 2) {
                console.log(array[i + 1][leng - 1 - (i + 1)]);
                return true;
            }
        }
    }

    return false;
}

let arr = [
    ["O", "X", "O"],
    ["X", "O", "X"],
    ["O", "X", "X"]
];

console.log(ticTacTok(arr));

/*

function checkRow ( rowArr, letter ) {
    for ( var i=0; i < 3; i++) {
        if (rowArr[i]!=letter) {
            return false;
        }
    }
    return true;
}

function checkColumn ( gameBoardMatrix, columnIndex, letter ) {
    for ( var i=0; i < 3; i++) {
        if (gameBoardMatrix[i][columnIndex]!=letter) {
            return false;
        }
    }
    return true;
}

function ticTacToeWinner ( gameBoardMatrix, letter) {

    // Check rows
    var rowWin = checkRow(gameBoardMatrix[0], letter)
        || checkRow(gameBoardMatrix[1], letter)
        || checkRow(gameBoardMatrix[2], letter);

    var colWin = checkColumn(gameBoardMatrix, 0, letter)
        || checkColumn(gameBoardMatrix, 1, letter)
        || checkColumn(gameBoardMatrix, 2, letter);

    var diagonalWinLeftToRight = (gameBoardMatrix[0][0]==letter && gameBoardMatrix[1][1]==letter && gameBoardMatrix[2][2]==letter);
    var diagonalWinRightToLeft = (gameBoardMatrix[0][2]==letter && gameBoardMatrix[1][1]==letter && gameBoardMatrix[2][0]==letter);

    return rowWin || colWin || diagonalWinLeftToRight || diagonalWinRightToLeft;
}

var board = [['O','-','X'],['-','O','-'],['-','X','O']];
ticTacToeWinner(board, 'X'); // false
ticTacToeWinner(board, 'O'); // true

*/
