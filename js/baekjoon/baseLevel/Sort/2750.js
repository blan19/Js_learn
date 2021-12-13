const fs = require("fs");
const arr = fs
  .readFileSync(
    "/Users/parkjunseo/Desktop/VSC/Js_learn/js/baekjoon/example.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map((element) => Number(element));

const unique = new Set(arr);

const swap = (arr, idx1, idx2) => {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
};

const BubbleSort = (arr) => {
  let length = arr.length;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }

  return arr;
};

BubbleSort(Array.from(unique)).map((el) => console.log(el));
