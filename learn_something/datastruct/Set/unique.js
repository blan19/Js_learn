function UniqueList (arr1, arr2) {
    const unique = new Set(arr1.concat(arr2));

    return Array.from(unique);
}

const array1 = [1, 1, 2, 2];
const array2 = [2, 3, 4, 5];

console.log(UniqueList(array1, array2));