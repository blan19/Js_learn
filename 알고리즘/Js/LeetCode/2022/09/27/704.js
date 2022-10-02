const binarySearch = (target, arr) => {
  let left = 0,
    right = arr.length - 1;
  let mid = Math.floor((left + right) / 2);

  while (left <= right) {
    if (target === arr[mid]) return mid;
    if (target < arr[mid]) right = mid - 1;
    else if (target > arr[mid]) left = mid + 1;
    mid = Math.floor((left + right) / 2);
  }

  return -1;
};

const search = (nums, target) => binarySearch(target, nums);

console.log(search([-1, 0, 3, 5, 9, 12], 9));
