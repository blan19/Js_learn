function solution (cm) {
    let answer = [];

    const inch = cm * 2.54;
    const feet = inch * 12;

    answer.push(inch)
    answer.push(feet)
    
    return answer;
}

const cm = 1;

console.log(solution(cm));