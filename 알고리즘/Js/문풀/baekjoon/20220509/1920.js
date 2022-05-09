const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

const input = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((val) => val.split(" ").map((el) => +el));

const arr = input[1].sort((a, b) => a - b);
const target = input[3];

const binarySearch = (list, target, left, right, mid) => {
  mid = Math.floor((left + right) / 2);
  if (right < left) {
    return list[mid] == target ? 1 : 0;
  }
  if (list[mid] > target) {
    right = mid - 1;
  } else {
    left = mid + 1;
  }
  return binarySearch(list, target, left, right, mid);
};

const result = target.map((val) =>
  binarySearch(arr, val, 0, arr.length - 1, 0)
);

console.log(result.join("\n"));
