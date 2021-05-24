// 나선형으로 출력
// 4방향 변수 초기화
// 변수를 하나씩 증/감


function spiralPrint (array) {
    let topRow = 0;
    let btmRow = array.length - 1;
    let leftCol = 0;
    let rightCol = array[0].length - 1;

    while (topRow < btmRow && leftCol < rightCol) {
        for (let i = 0; i <= rightCol; i++) {
            console.log(array[topRow][i]);
        }
        topRow++;
    
        for (let i = topRow; i <= btmRow; i++) {
            console.log(array[i][rightCol]);
        }
        rightCol--;

        for (let i = rightCol; i >= leftCol; i--) {
            console.log(array[btmRow][i]);
        }
        btmRow--;

        for (let i = btmRow; i > topRow;  i--) {
            console.log(array[i][leftCol]);
        }
        leftCol++;
    }

}


let arr = [
    [3, 5, 6, 1,9],
    [2, 9, 10, 5, 4],
    [5, 8, 4, 9, 3],
    [1, 6, 7, 3, 8]
];

spiralPrint(arr);
