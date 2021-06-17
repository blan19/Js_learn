const array = [10, 5, 2, 3, 1, 4, 2, 3, 5, 1, 7];

function countingSort (arr) {
    let hash = {}, countArr = [];

    if (arr.length < 2) {
        return arr;
    }

    for (let i = 0; i < arr.length; i++) {
        if(!hash[arr[i]]) {
            hash[arr[i]] = 1;
        } else {
            hash[arr[i]]++;
        }
    }

    for (let key in hash) {
        
        for (let i = 0; i < hash[key]; i++) {
            countArr.push(parseInt(key));
        }
    }

    return countArr;
}

const arr = countingSort(array);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}