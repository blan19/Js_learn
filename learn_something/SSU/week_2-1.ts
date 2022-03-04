// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// function binarySearch(arr, n) {
//   let low = 0;
//   let high = arr.length - 1;
//   let mid;

//   while (low <= high) {
//     mid = Math.floor((low + high) / 2);

//     if (n === arr[mid]) {
//       return "Yes";
//     } else if (n < arr[mid]) {
//       high = mid - 1;
//     } else {
//       low = mid + 1;
//     }
//   }
//   return "No";
// }

// function binarySearch(array, targetValue) {
//   let left = 0;
//   let right = array.length - 1;
//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if (array[mid] === targetValue) {
//       return array[mid];
//     } else if (array[mid] > targetValue) {
//       right = mid - 1;
//     } else if (array[mid] < targetValue) {
//       left = mid + 1;
//     }
//   }
//   return -1;
// }

// console.log(sortedArr);
// console.log(binarySearch(sortedArr, 14));

// function check(arr, target) {
//   if (arr.includes(target)) {
//     return "Yes";
//   }
//   return "No";
// }

// console.log(check(arr2, 15));

const arr: number[] = [10, 7, 11, 5, 13, 8];

function solution(arr: number[], target: number) {
  if (arr.length < 1) {
    return -1;
  }

  for (let i = 0; i < arr.length; i++) {
    if (target === arr[i]) {
      return i;
    }
  }
  return -1;
}

console.log(solution(arr, 5));
