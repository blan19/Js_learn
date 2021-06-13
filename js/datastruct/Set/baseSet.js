let setA = new Set([1, 2, 3, 4, 5, 6, 12]);
let setB = new Set([1, 2, 3, 4, 5, 8, 6, 10]);

// 교집합
function intersectSet (SetA, SetB) {
    let intersection = new Set();

    for (let x of SetA) {
        if (SetB.has(x)) {
            intersection.add(x);
        }
    }

    return intersection;
}

// 상위 집합 여부 
function isSuperSet (SetA, SetB) {

    for (let x of SetA) {
        if (!SetB.has(x)) {
            return false;
        }
    }
    return true;
}

// 합집합
function unionSet (SetA, SetB) {
    let union = new Set(SetB);

    for (let x of SetA) {
        if (!SetB.has(x)) {
            union.add(x);
        }
    }

    return union;
}

// 차집합
function differenceSet (SetA, SetB) {
    let diff = new Set(SetA);

    for (let x of SetB) {
        diff.delete(x);
    }

    return diff;
}

// 배열로 변환 Array,from()
// 메서드는 유사 배열 객체(array-like object)나 반복 가능한 객체(iterable object)를 
// 얕게 복사해 새로운Array 객체를 만듭니다.