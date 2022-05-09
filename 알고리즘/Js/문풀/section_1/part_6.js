function solution(array){
    let answer = [];

    let sum = 0;
    let arrayOdd = [];

    for (let i = 0; i < array.length; i++) {

        if (array[i]%2 !== 0) {
            arrayOdd.push(array[i]);
            sum += array[i];
        }
    }

    let arrayOddMin = arrayOdd[0];

    for (let i = 0; i < arrayOdd.length; i++) {
        if (arrayOdd[i] < arrayOddMin) {
            arrayOddMin = arrayOdd[i];
        }
    }

    answer.push(sum);
    answer.push(arrayOddMin);
    return answer;
}


let array = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(array));