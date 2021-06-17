const array = [5, -1, -2, -3, -1, -2];

function quickSort (arr, left, right) {
    let idx;
    
    if (arr.length > 1) {
        idx = partition(arr, left, right);

        if (idx - 1 > left) {
            quickSort(arr, left, idx - 1);
        }

        if (idx < right) {
            quickSort(arr, idx, right)
        }
    }

    return arr;
}

function partition (arr, left, right) {
    let pivot = arr[Math.floor((left + right) / 2)];

    while (left <= right) {

        while (pivot > arr[left]) {
            left++;
        }

        while (pivot < arr[right]) {
            right--;
        }

        if (left <= right) {
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }

    return left;
}

quickSort(array, 0, array.length - 1);

let average = Math.floor(array.reduce((a, b) => a + b) / array.length);
let middle = array[Math.floor((array.length - 1) / 2)];
let min = (array.length == 1) ? array[0] : array[1];
let range = array[array.length - 1] - array[0];
