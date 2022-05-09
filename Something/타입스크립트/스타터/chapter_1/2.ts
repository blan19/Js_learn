interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: "red", area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

/**
 * @커스텀_타입의_유니온
 */

export class SearchAction {
  actionType = "SEARCH";
  constructor(readonly payload: { searchQeury: string }) {}
}

export class SearchSuccessAction {
  actionType = "SEARCH_SUCCESS";
  constructor(readonly payload: { searchResults: string[] }) {}
}

export class SearchFailedAction {
  actionType: "SEARCH_FAILED";
}

export type SearchActions =
  | SearchAction
  | SearchSuccessAction
  | SearchFailedAction;

/**
 * 식별 가능한 유니온은 공통 프러퍼티 즉, 공통의 식별자를 가진 멤버로 이루어진
 * 타입을 말한다
 */

/**
 * @any_unknown
 */

/**
 * any 타입의 변수는 모든 타입의 값을 가질 수 있다. 타입스크립트에서 타입을 작성하지 않는다면 자바스크립트와 차이점이 없다.
 * 마찬가지로 any 타입 역시 존재하지 않는 프로퍼티에 접근하면 런타임 중 예상치 못한 오류가 발생할 수 있다
 *
 * unknown 타입은 타입스크립트 3.0 버전에서 도입됐다.
 * 컴파일러는 프로퍼티에 접근하기 전 unknown 타입의 변수에 타입 범위를 줄이라고 경고한다.
 * 따라서 런타임 오류를 방지할 수 있다
 *
 * any와 unknown의 차이점은 예를 들어 프론트엔드 단에서 Person 타입을 선언하고,
 * 백엔드에서 오는 데이터가 JSON 형식이라고 가정해보자.
 * JSON.parse() 메서드로 JSON 문자열을 객체로 바구고 이를 any 타입으로 정의해보자
 */

type Person = {
  discriminator: "person";
  address: string;
};

let person_1: any;

person_1 = JSON.parse('{"adress": "Soongsil univ"}');

console.log(person_1.address); // undefined

/**
 * 마지막 줄에 JSON 문자열 내 철자 오류가 있어 undefined가 출력된다.
 * parse 메서드로 반환된 객체는 address 프로퍼티가 아닌 adress 프로퍼티를 가진다.
 *
 * 이번엔 변수를 unknown 타입으로 바꾸어 보자
 */

let person_2: unknown;

person_2 = JSON.parse('{"address":"Soongsil univ"}');

// console.log(person_2.address); // 컴파일 오류 발생

/**
 * 타입스크립트는 사용자가 정의한 타입 가드로 객체의 특정 타입을 확인할 수 있다
 * "thisFunctionArg is SomeType"이라는 메세지를 반환하는 함수를 만들 수 있다
 *
 * 타입 가드 isPerson()을 만들고 address 프로퍼티를 가진 객체이면 Person임을 출력하도록 만들어 보자
 */

// isPerson 타입 가드는 주어진 객체가 address 프로퍼티를 가지고 있다면 true를 반환한다

const isPerson = (obj: any): obj is Person => "address" in obj;

if (isPerson(person_2)) {
  console.log(person_2.address);
} else {
  console.log("person_2 is not a Person");
}

// isPerson() 가드를 조금 더 안전하게 사용해보자. !!연산자는 주어진 객체가 true인지 확인한다

const isPerson_2 = (obj: any): obj is Person => !!obj && "address" in obj;

/**
 * 위 코드에서 address 타입의 유무만으로 Person 타입을 식별할 수 있었다.
 * 그러나 경우에 따라 한가지 프로퍼티만으로 식별하기에 부족한 경우가 있다
 * 예를들어 Pet 클래스가 address 프로퍼티를 갖고 있을 경우가 있다
 * 객체가 특정 타입에 매칭되는지를 확인하려면 몇 가지 프로퍼티가 더 필요하다
 *
 * 더 간단한 방법은 식별자 프로퍼티를 가지고 Person 타입을 식별하는 것이다
 */

const isPerson_3 = (obj: any): obj is Person =>
  !!obj && obj.discriminator === "person";

// 연습문제

class Dog {
  constructor(readonly name: string) {}

  sayHello() {
    return this.name;
  }
}

class Fish {
  constructor(readonly name: string) {}

  dive(howDeep: number) {
    return `${howDeep}만큼 `;
  }
}

type Pet = Dog | Fish;

function talkToPet(pet: Pet): string {
  if (pet instanceof Dog) {
    return pet.sayHello();
  } else if (pet instanceof Fish) {
    return "Fish cannot talk, sorry";
  }
}
