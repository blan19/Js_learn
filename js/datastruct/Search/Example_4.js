// 선형 탐색
// 배열 순홰



const array = [24, 2, 5, 9, 5, 6, 7];
const num = 30;

/*
function findTwoSum (arr, sum) {
    let length = arr.length;

    if (length === 1) {
        return arr;
    }

    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length - 1; j++) {
            if ((arr[i] + arr[j]) === sum) {
                return true;
            }
        }
    }

    return false;
}
*/

// 해시테이블로 구현

function hashFindTwoSum (arr, num) {
    let store = {};
    let length = arr.length;

    for (let i = 0; i < length; i++) {
        if (store[arr[i]]) {
            return true;
        } else {
            store[num - arr[i]] = arr[i];
        }
    }

    return false;
}

console.log(hashFindTwoSum(array, num));