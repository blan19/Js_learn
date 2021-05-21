function medianOfArray(array) {
    var length = array.length;
    // Odd
    if (length % 2 == 1) {
        return array[Math.floor(length / 2)];

    } else {
        // Even
        return (array[length / 2] + array[length / 2 - 1]) / 2;
    }
}

let arr = [11, 23, 24];
console.log(medianOfArray(arr));