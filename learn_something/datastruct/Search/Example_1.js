// 수학 라이브러리를 사용하지 않고, 정수의 제곱근 함수 구현

// 기저 조건
// 0과 1일 때
// 반복문 

/*
function sqrt (num) {
    if (num === 1 || num === 0) {
        return num;
    }

    let sqr = 0;

    for (let i = 2; i < num; i++) {
        if ((i * i) === num) {
            sqr = i;
            return sqr;
        }
    }

    return false;
}

console.log(sqrt(9));
*/

function sqrt (num) {
    if (num === 0 || num === 1) {
        return num;
    }

    let square = 1, index = 1;

    while (square < num) {
        if (square === num) {
            return square;
        }

        index++;
        square = index * index;
    }

    return index;
}

// 이진검색 활용

function binarySqrt (num) {
    if (num === 0 || num === 1) {
        return num;
    }

    let start = 1;
    let end = num;
    let ans;

    while (start <= end) {
        let pivot = Math.floor((start + end) / 2);

        if (pivot * pivot === num) {
            return pivot;
        } 

        if (pivot * pivot < num) {
            start = pivot + 1;
        } else {
            end = pivot - 1;
        }
    }
    return false;
}

console.log(binarySqrt(12));