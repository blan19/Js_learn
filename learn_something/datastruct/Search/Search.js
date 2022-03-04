const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 선형검색
function LinearSearch (arr, n) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === n) {
            return true;
        }
    }

    return false;
}

// 이진 검색
function BinarySearch (arr, n) {
    let LowIdx = 0;
    let HigthIdx = arr.length - 1;
    
    while(LowIdx <= HigthIdx) {
        let MiddleIdx = Math.floor((LowIdx + HigthIdx) / 2);
        
        if (arr[MiddleIdx] === n) {
            return MiddleIdx;
        } else if (arr[MiddleIdx] < n) {
            LowIdx = MiddleIdx + 1;
        } else {
            HigthIdx = MiddleIdx - 1;
        }
    }

    return -1;
}

console.log(BinarySearch(array, 3));