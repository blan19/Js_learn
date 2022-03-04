// 어떤 수가 주어졌을 때 배열 내의 어떤 항목 두 개를 합쳐야 해당 수가 되는지 찾는 알고리즘

// 일반적인 이중 for문 

/*
let arr = [1, 2, 3, 4, 5];
let n = 9;

function getArrayWeight(array, value) {
    let answer = [];

    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if ((arr[i] + arr[j]) === value) {
                answer.push(arr[i]);
                answer.push(arr[j]);
                return answer;
            }
        }
    }
    return -1;
}

console.log(getArrayWeight(arr, n));
*/

// 해시테이블을 활용한 알고리즘

let arr = [1, 2, 3, 4, 5];
let n = 9;

function getArrayWeightBetter(array, value) {
    let hashTable = {};

    for (let i = 0; i < array.length; i++) {
        let currentValue = arr[i];
        let different = value - currentValue;

        // 값이 존재하는지 확인
        if (hashTable[currentValue] != undefined) {
            return [i, hashTable[currentValue]];
        } else {
            // 인덱스 저장
            hashTable[different] = i;
        }
    }

    return -1;
}

console.log(getArrayWeightBetter(arr, n));