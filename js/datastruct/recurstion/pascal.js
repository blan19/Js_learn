function pascalFibo (row, col) {
    if (col === 0) {
        return 1;
    } else if (row === 0) {
        return 0;
    } else {
        return pascalFibo(row -1, col - 1) + pascalFibo(row - 1, col);
    }
}

console.log(pascalFibo(5, 2));