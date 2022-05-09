function solution(a, b, c){
    let answer = "YES", max;
    let tot = a + b + c;

    if (a < b) {
        max = b;
    } else {
        max = a;
    }

    if (c < max) {
        max;
    } else {
        max = c;
    }

    if (tot - max <= max) {
        answer = "NO";
    } else {
        answer;
    }

    return answer;
}

console.log(solution(12, 38, 15));