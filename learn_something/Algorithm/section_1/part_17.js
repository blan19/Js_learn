
function solution(array) {
    let answer =[];

    for (let i = 0; i < arr.length; i++) {
        //console.log(arr[i], i, arr.indexOf(arr[i]));

        if (arr.indexOf(arr[i]) === i) {
            answer.push(arr[i]);
        }
    }



    return answer;
}

const arr = ["good", "time", "good", "time", "student"];
console.log(solution(arr));


/*
function solution(s){  
    let answer;
    //console.log(s.indexOf("student"));
    answer=s.filter((v, i)=>{
        //console.log(v, i);
        if(s.indexOf(v)===i) return v;
    });

    
    return answer;
}
let str=["good", "time", "good", "time", "student"];
console.log(solution(str));
*/