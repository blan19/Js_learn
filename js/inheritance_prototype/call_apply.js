// call과 apply의 차이점
// 함수 호출

let user1 = {
    name: "Park Junseo",
};

let user2 = {
    name: "Kim Eunchae",
    study: function(lastPoint1 = ".", lastPoint2 = "!") {
        console.log(this.name + " 이/가 공부하고 있습니다" + lastPoint1 + lastPoint2);
    },
};

user2.study();

user2.study.call(user1, "...", "!!!");

user2.study.apply(user1, ["......", "!!!!!"]);