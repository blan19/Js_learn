//대괄호 표기법
//변수 key는 런타임에 평가되기 때문에 사용자 입력값 변경 등에 따라 값이 변경될 수 있습니다. 
//어떤 경우든, 평가가 끝난 이후의 결과가 프로퍼티 키로 사용됩니다. 
//이를 응용하면 코드를 유연하게 작성할 수 있습니다.

/*
let user = {
    name: "Park JunSeo",
    univ: "Soonsil Univ",
    adress: "Seoul"
};

let key = prompt("얻고 싶은 유저의 정보를 입력하세요.", "");

console.log(user[key]);
*/

//계산된 프로퍼티
let name = prompt("너의 이름은 무엇입니까?", "junseo");

let user = {

};

user[name] = "OK";

//프로퍼티를 삭제하고 싶을 때: delete obj.prop
//해당 key를 가진 프로퍼티가 객체 내에 있는지 확인하고자 할 때: "key" in obj
//프로퍼티를 나열할 때: for (let key in obj)