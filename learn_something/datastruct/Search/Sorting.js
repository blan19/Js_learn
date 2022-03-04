const array = [6, 1, 5, 3, 4, 9];

// Bubble Sort
// 최악의 정렬 알고리즘 
// 이중 for문으로 이루어져있어 성능이 떨어진다
// 사용할 일이 별로 없다 

function swap (arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

function BubbleSort (arr) {
    let length = arr.length;

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }

    return arr;
}

// Selection Sort
// 버블정렬보다 그나마 나은 정렬 알고리즘

function SelectionSort (arr) {
    let length = arr.length, 
    min;

    for (let i = 0; i < length; i++) {
        min = i;
        for (let j = i + 1; j < length; j++) {
            if(arr[j] < arr[min]) {
                min = j;
            }
        }

        if (i !== min) {
            swap(arr, i, min);
        }
    }

    return arr;
}

// insertion Sort 
// 배열을 순차적으로 검색하면서, 
// 정렬되지 않은 항목들을 배열의 왼쪽의 정렬된 부분으로 이동시킨다

function InsertSort (arr) {
    let length = arr.length;
    let current;
    let i, j;

    for (i = 0; i < length; i++) {
        current = arr[i];

        for (j = i - 1; j > -1 && arr[j] > current; j--) {
            arr[j + 1] = arr[j];
        }

        arr[j + 1] = current;
    }

    return arr;
}

