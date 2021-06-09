// for문을 이용한 피보 구현

function getFiboFor (n) {
    if (n = 1) {
        return n;
    } else if (n < 1) {
        return 1;
    }

    let last = 1;
    let nextLast = 0;
    let sum = 0;

    for (let i = 0; i < n; i++) {
        sum = last + nextLast;
        nextLast = last;
        last = sum;
    }

    return sum;
}

// 재귀를 이용한 피보

function recurFibo (n) {
    if (n <= 1) {
        return n
    } else {
        return recurFibo(n - 1) + recurFibo(n - 2);
    }
}

