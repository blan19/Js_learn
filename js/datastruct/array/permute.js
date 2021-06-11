function swap (arr, start, end) {
    let tmp = arr[start];
    arr[start] = arr[end];
    arr[end] = tmp;
}


function permute (arr, start, end) {
    if (start === end) {
        console.log(arr);
    } else {
        for (let i = start; i < end + 1; i++) {
            swap(arr, start, i);
            console.log(`For : ${arr}`);
            permute(arr, start + 1, end);
            swap(arr, start, i);
        }
    }
}

function permuteArray (arr) {
    permute(arr, 0, arr.length - 1);
}

permuteArray(["A", "C", "D"])
