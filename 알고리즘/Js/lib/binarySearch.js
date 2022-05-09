const binarySearch = (list, target, left, right) => {
  let mid = 0;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (list[mid] === target) {
      return mid;
    }
    if (list[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};
