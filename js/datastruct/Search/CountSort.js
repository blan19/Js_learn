// Count Sort
// 숫자에 대해서만 동작, 특정 범위가 주어져야한다
// 해시테이블을 이용한 계수 정렬 알고리즘

let array = [6, 1, 23, 2, 3, 2, 1, 2, 2, 3, 3, 1, 123, 123, 4, 2, 3];

function countSort (arr) {
    let hash = {};
    let countArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (!hash[arr[i]]) {
            hash[arr[i]] = 1;
        } else {
            hash[arr[i]]++;
        }
    }

    for (let key in hash) {
        for (let i = 0; i < hash[key]; i++) {
            countArr.push(parseInt(key));
        }
    }

    return countArr;
}

console.log(countSort(array));