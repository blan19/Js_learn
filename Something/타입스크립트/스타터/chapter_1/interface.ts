`읽기 전용 프로퍼티`;

/**
 * 일부 프로퍼티들은 객체가 처음 생성될 때만 수정 가능해야합니다. 프로퍼티 이름 앞에 readonly를 넣어서 이를 지정할 수 있습니다
 */

interface Point {
  readonly x: number;
  readonly y: number;
}

let p_1: Point = { x: 10, y: 20 };
// p_1.x = 1; // 읽기 전용이므로 오류 발생

/**
 * Typescript에서는 모든 변경 메서드가 제거된 Array<T>와 동일한 ReadonlyArray<T> 타입을 제공합니다.
 * 그래서 생성 후에 배열을 변경하지 않음을 보장할 수 있습니다
 */

let a: number[] = [1, 2, 3, 4, 5, 6];
let ro: ReadonlyArray<number> = a;
// ro[0] = 1; // 오류 발생

/**
 * 타입 단언으로 오버라이드하는 것은 가능합니다
 */

a = ro as number[];

/**
 * readonly vs const
 *
 * readonly와 const 중에 어떤 것을 사용할 지 기억하기 가장 쉬운 방법은 변수와 프로퍼티중 어디에 사용할지 질문해 보는 것입니다.
 * 변수는 const를 사용하고 프로퍼티는 readonly를 사용합니다
 */

`초과 프로퍼티 검사 (Excess Property Checks)`;

/**
 * 객체 리터럴은 다른 변수에 할당할 때나 인수로 전달할 때, 특별한 처리를 받고, 초과 프로퍼티 검사를 받습니다. 만약 객체 리터럴이 "target type"이
 * 갖고 있지 않은 프로퍼티를 갖고 있으면, 에러를 발생합니다
 */

interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newArea = { color: "", area: 10 };
  if (config.color) {
    newArea.color = config.color;
  }
  if (config.width) {
    newArea.area = config.width * 2;
  }
  return newArea;
}

// let mySquare = createSquare({ colour: "red", width: 100 }); // 오류 발생!

/*
이 검사를 피하는 방법은 정말 간단합니다. 가장 간단한 방법은 타입 단언을 사용하는 것입니다
*/

// let mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);

/*
하지만 특별한 경우에, 추가 프로퍼티가 있음을 확신한다면, string index signature를 추가하는 것이 더 나은 방법입니다
*/

interface SquareIndexConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
}

/*
추가 프로퍼티 검사를 피하는 마지막 방법은 놀랍게도 객체를 다른 변수에 할당하는 것입니다. 할당된 변수는 
추가 프로퍼티 검사를 받지 않기 때문에 컴파일러는 에러를 주지 않습니다

이 방법은 공통 프로퍼티가 있는 경우에만 사용할 수 있습니다 이 경우엔 width가 그 경우 입니다
만약에 공통 객체 프로퍼티가 없다면 에러가 발생합니다
*/

let mySquare_2 = { colour: "red", width: 100 };
createSquare(mySquare_2);

interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;

mySearch = function (source, subString) {
  let result = source.search(subString);
  return result > -1;
};

interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];

class Animal {
  name: string;
}
class Dog extends Animal {
  breed: string;
}

// 오류: 숫자형 문자열로 인덱싱을 하면 완전히 다른 타입의 Animal을 얻게 될 것입니다!
// interface NotOkay {
//   [x: number]: Animal;
//   [x: string]: Dog;
// }

// interface NumberDictionary {
//   [index: string]: number;
//   length: number;
//   name: string;
// }
