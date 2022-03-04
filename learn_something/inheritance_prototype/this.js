/*

실행 컨텍스트(Execution Context)
실행 컨텍스트란 자바스크립트 코드가 실행되고 연산되는 범위를 나타내는 추상적인 개념으로 코드가 실행된다면 실행 컨텍스트 내부에서 작동하고 있는 것이라고 보면 됩니다.

실행 컨텍스트는 크게 3가지로 분류되는 데, 메인 주제가 아니므로 주요한 2가지만 간단하게 알아보겠습니다.

Global Execution Context
기본적으로 코드가 실행되는 영역이며, 여기서 글로벌 객체인 Window 객체를 생성하며, this를 글로벌 객체(Window 객체)로 설정해줍니다.

Functional Execution Context
각각의 함수가 가지는 실행 컨텍스트로, 함수가 호출될 때 해당 실행 컨텍스트 생성이 됩니다.

<언제 this가 바뀔까>
1. 객체의 메소드를 호출하는 경우
2. 생성자를 통해 객체를 생성하는 경우
3. 예외적인 경우
-> Jquery, React 등에 일부 라이브러리에서 엘리먼트에 이벤트를 추가할 때, 
콜백함수에서 this를 사용하면 값이 바뀌는 경우가 있습니다.
4. apply(), call(), bind()
-> 자바스크립트에서는 this를 자유자제로 바꿀 수 있도록 해주는 메소드를 제공하는 데, 
바로 apply, call, bind
apply : call 함수와 유사하지만, 매개변수는 배열로 받는것에 있어 차이가 있다.
call : 객채를 바인딩 함과 동시에 호출을 한다.
bind : 바인딩이된 함수를 반환하며, 한번더 호출시 함수를 실행한다.

*/

let myObj = {
    myValue: 6,
    myWindow: this,
    myFunc: function() {
        console.log(this);
    },
    myArrow: () => {
        console.log(this);
    },
};

console.log(myObj.myFunc());
console.log(myObj.myArrow());

/*

function 키워드는 해당 객체를 바인딩하여 this의 값을 변경하는 것이고, 
() => {}는 상위 객체의 this를 그대로 이어받아(?) 사용하는 것

*/

const Tom = {
    age: 25,
    gender: 'man',
};

function printProfile(name) {
    console.log(name, this.age, this.gender);
}

  printProfile.apply(Tom, ['Tom']); // Tom 25 man
  printProfile.call(Tom, 'Tom'); // Tom 25 man
  printProfile.bind(Tom, 'Tom').call(); // Tom 25 man