// 퀵정렬
// 왼쪽 수는 기준보다 작으면 다음으로 넘어가고, 크면 가만히 있는다. 
// 오른쪽 수는 기준보다 크면 다음으로 넘어가고, 작으면 가만히 있는다. 
// 이렇게 넘어가다가 왼쪽은 기준보다 크고, 오른쪽은 기준보다 작으면 서로 바꿔준다.

let array = [1, 3, 5, 6, 2, 0, 8, 9, 7, 4];

function QuickSort (arr, left, right) {
    let idx;

    if (arr.length > 1) {
        idx = partition(arr, left, right);

        if (left < idx - 1) {
            QuickSort(arr, left, idx - 1);
        }

        if (idx < right) {
            QuickSort(arr, idx, right);
        }
    }

    return arr;
}

function partition (arr, letf, right) {
    let pivot = arr[Math.floor((letf + right) / 2)];

    while (letf <= right) {
        while (arr[letf] < pivot) {
            letf++;
        }

        while (arr[right] > pivot) {
            right--;
        }

        if (letf <= right) {
            let temp = arr[letf];
            arr[letf] = arr[right];
            arr[right] = temp;
            letf++;
            right--;
        }
    }
    return letf;
}

console.log(QuickSort(array, 0, array.length - 1));