const fs = require("fs");
const arr = fs
  .readFileSync(
    "/Users/parkjunseo/Desktop/VSC/Js_learn/js/baekjoon/example.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map((element) => Number(element));

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

console.log(
  quickSort(
    Array.from(new Set(arr)),
    0,
    Array.from(new Set(arr)).length - 1
  ).join("\n")
);
