function solution(array){
    let answer;

    let arrayMin = array[0];

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < arrayMin) {
            arrayMin = array[i];
        }
    }

    answer = arrayMin;
    return answer;
}

let array = [3, 5, 14, 7, 8, 4, 10];
console.log(solution(array));