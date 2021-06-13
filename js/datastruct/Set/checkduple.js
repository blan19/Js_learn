// 배열 중복 항목 체크

function checkDuplicates (arr) {
    let duple = new Set(arr);

    if (duple.size !== arr.length) {
        return false;
    }

    return true;
}

const array = [1, 1, 2, 3, 4, 5, 5];

console.log(checkDuplicates(array));