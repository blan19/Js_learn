// 배열에서 단 한 번만 등장하는 항목 찾기

// 해시 테이블로 구현
// 해시테이블에 저장하고 카운트 1
// 값이 또 등장한다면 카운트++
// 나중에 카운트가 1 인값 출력

let array = [1, 1, 2, 4, 4, 5, 5, 6, 6];

function hashFindUnique (arr) {
    let hash = {};
    let length = arr.length;

    for (let i = 0; i < length; i++) {
        if (!hash[arr[i]]) {
            hash[arr[i]] = 1;
        } else {
            hash[arr[i]]++;
        }
    }

    for (let key in hash) {
        if (hash[key] === 1) {
            return parseInt(key);
        }
    }

    return false;
}

console.log(hashFindUnique(array));