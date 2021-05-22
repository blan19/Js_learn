/*
호출 스케줄링
1. setTimeout을 이용해 일정 시간이 지난 후에 함수를 실행하는 방법
2. setInterval을 이용해 일정 시간 간격을 두고 함수를 실행하는 방법

 */

/*
let printUser = (name = "Park Junseo") => {
    console.log(name + " 이/가 공부중입니다");
}

setTimeout(printUser, 1000, "EunChae");

*/

/*
setTimeout(
    () => {
        console.log("안녕하쇼!");
    }
, 1000)
*/

/*
let timerId = setInterval(
    () => {
        console.log("테스트 중입니다");
    }
,2000)

setTimeout(
    () => {
        clearInterval(timerId);
        console.log("테스트 정지");
    }
,7000)

*/

let timerId = setTimeout(function tick() {
    console.log('째깍');
    timerId = setTimeout(tick, 2000); // (*)
}, 2000);
