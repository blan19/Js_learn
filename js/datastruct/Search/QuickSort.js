let array = [8, 1, 3, 5, 6, 2, 0, 10, 9, 7, 11, 21, 22];

// function QuickSort(arr, left, right) {
//   let idx;

//   if (arr.length > 1) {
//     idx = partition(arr, left, right);

//     if (left < idx - 1) {
//       QuickSort(arr, left, idx - 1);
//     }

//     if (idx < right) {
//       QuickSort(arr, idx, right);
//     }
//   }

//   return arr;
// }

// function partition(arr, letf, right) {
//   let pivot = arr[Math.floor((letf + right) / 2)];

//   while (letf <= right) {
//     while (arr[letf] < pivot) {
//       letf++;
//     }

//     while (arr[right] > pivot) {
//       right--;
//     }

//     if (letf <= right) {
//       [arr[letf], arr[right]] = [arr[right], arr[letf]];
//       letf++;
//       right--;
//     }
//   }
//   return letf;
// }

// console.log(QuickSort(array, 0, array.length - 1));

const partition = (arr, low, high, pivotPoint) => {
  let i, j;
  const pivotItem = arr[low];
  j = low;

  for (i = low + 1; i <= high; i++) {
    if (arr[i] < pivotItem) {
      j++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  pivotPoint = j;
  [arr[low], arr[pivotPoint]] = [arr[pivotPoint], arr[low]];
  return pivotPoint;
};

const quickSort = (arr, low, high) => {
  let pivotPoint;
  if (high > low) {
    pivotPoint = partition(arr, low, high, pivotPoint);
    quickSort(arr, low, pivotPoint - 1);
    quickSort(arr, pivotPoint + 1, high);
  }
  return arr;
};

console.log(quickSort(array, 0, array.length - 1));
