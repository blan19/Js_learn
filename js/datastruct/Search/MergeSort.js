// Merge Sort
// !in place Algorithm
// stable Algorithm

let array = [6, 1, 23, 4, 2, 3];

function mergeSort (arr) {
    if (arr.length < 2) {
        return arr;
    }

    let pivot = Math.floor(arr.length / 2);
    let leftArr = arr.slice(0, pivot);
    let rightArr = arr.slice(pivot);

    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge (left, right) {
    let result = [];
    let leftidx = 0, rightIdx = 0;

    while(leftidx < left.length && rightIdx < right.length) {

        if (left[leftidx] < right[rightIdx]) {
            result.push(left[leftidx++]);
        } else {
            result.push(right[rightIdx++]);
        }
    }
    
    let leftRemains = left.slice(leftidx),
        rightRemains = right.slice(rightIdx);

    return result.concat(leftRemains).concat(rightRemains);
}

console.log(mergeSort(array));
