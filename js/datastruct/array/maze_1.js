/*
let mazeMatrix = [
    ["%","e","%","%","%","%","%","%","%","%","%"],
    ["%",".",".",".","%",".","%",".",".",".","%"],
    ["%",".","%",".","%",".","%",".","%","%","%"],
    ["%",".","%",".",".",".",".",".",".",".","%"],
    ["%",".","%","%","%","%",".","%","%",".","%"],
    ["%",".","%",".",".",".",".",".","%",".","%"],
    ["%","%","%","%","%","%","%","%","%","x","%"]
];

function findChar(char, mazeMatrix) {
    var row = mazeMatrix.length,
        column = mazeMatrix[0].length;

    for (var i = 0; i < row; i++) {
        for (var j = 0; j < column; j++) {
            if (mazeMatrix[i][j] == char) {
                return [i, j];
            }
        }
    }
}

function printMatrix(matrix) {
    var mazePrintStr = "",
        row = matrix.length,
        column = matrix[0].length;

    for (var i = 0; i < row; i++) {

        for (var j = 0; j < column; j++) {
            mazePrintStr += mazeMatrix[i][j];
        }

        mazePrintStr += "\n";

    }
    console.log(mazePrintStr);
}


function mazePathFinder(mazeMatrix) {
    var row = mazeMatrix.length,
        column = mazeMatrix[0].length,
        startPos = findChar('e', mazeMatrix),
        endPos = findChar('x', mazeMatrix);

    path(startPos[0], startPos[1]);

    function path(x, y) {
        if (x > row - 1 || y > column - 1 || x < 0 || y < 0) {
            return false;
        }
        // Found
        if (x == endPos[0] && y == endPos[1]) {
            return true;
        }
        if (mazeMatrix[x][y] == '%' || mazeMatrix[x][y] == '+') {
            return false;
        }
        // Mark the current spot
        mazeMatrix[x][y] = '+';
        printMatrix(mazeMatrix);

        if (path(x, y - 1) || path(x + 1, y) || path(x, y + 1) || path(x - 1, y)) {
            return true;
        }
        mazeMatrix[x][y] = '.';
        return false;
    }
}

mazePathFinder(mazeMatrix);
*/

let mazeMatrix = [
    ["%","e","%","%","%","%","%","%","%","%","%"],
    ["%",".",".",".","%",".","%",".",".",".","%"],
    ["%",".","%",".","%",".","%",".","%","%","%"],
    ["%",".","%",".",".",".",".",".",".",".","%"],
    ["%",".","%","%","%","%",".","%","%",".","%"],
    ["%",".","%",".",".",".",".",".","%",".","%"],
    ["%","%","%","%","%","%","%","%","%","x","%"]
];

function findChar (char, arr) {
    const row = arr.length;
    const col = arr[0].length;

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (arr[i][j] === char) {
                return [i, j];
            }
        }
    }

    return false;
}

function printMaze (arr) {
    let mazePrint = "";
    let row = arr.length;
    let col = arr[0].length;

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            mazePrint += arr[i][j]
        }
        mazePrint += "\n";
    }

    console.log(mazePrint);
}

function pathFinder (arr) {
    let row = arr.length;
    let col = arr[0].length;
    let startPos = findChar("e", arr);
    let endPos = findChar("x", arr);

    function path (x, y) {
        if (x > row - 1 || y > col - 1 || x < 0 || y < 0) {
            return false;
        }

        if (x === endPos[0] && y === endPos[1]) {
            return true;
        }

        if (arr[x][y] === "%" || arr[x][y] === "+") {
            return false;
        }

        arr[x][y] = "+";
        printMaze(arr);

        if(path(x + 1, y) || path(x, y + 1) || path(x - 1, y) || path(x, y - 1)) {
            return true;
        }
        arr[x][y] = "."
        return false;
    }

    path(startPos[0], startPos[1]);
}

pathFinder(mazeMatrix);

