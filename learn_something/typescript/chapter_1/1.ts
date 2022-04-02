/**
 *
 */

/**
 * 구조적 타입 시스템 (Structural Type System)
 * TypeScript의 핵심 원칙 중 하나는 타입 검사가 값이 있는 형태에 집중한다는 것입니다. 이는 때때로 "덕 타이핑(duck typing)" 또는 "구조적 타이핑" 이라고 불립니다.
 * 구조적 타입 시스템에서 두 객체가 같은 형태를 가지면 같은 것으로 간주됩니다.
 */

const fst: (a: any, b: any) => any = (a, b) => a;

const snd: <T, U>(a: T, b: U) => U = (a, b) => b;

/**
 * 기본 타입
 */

// Boolean

const isDone: boolean = true;

// Number

/**
 * JavaScript처럼, TypeScript의 모든 숫자는 부동 소수 값입니다. 부동 소수에는 number라는 타입이 붙혀집니다.
 * TypeScript는 16진수, 10진수 리터럴에 더불어, ECMAScript 2015에 소개된 2진수, 8진수 리터럴도 지원합니다.
 */

const decimal: number = 6;
const PI: number = 3.14;

// String

const myName: string = "Junseo Park";
const age: number = 28;
const sentence: string = `Hi My name is ${myName}, i'll be ${age} years old next month.`;

// Array

const list: Array<string> = ["hi"];

// Tuple

/**
 * 튜플 타입을 사용하면, 요소의 타입과 개수가 고정된 배열을 표현할 수 있습니다.
 *  단 요소들의 타입이 모두 같을 필요는 없습니다.
 * 예를 들어, number, string 이 쌍으로 있는 값을 나타내고 싶을 수 있습니다:
 */

let tuple: [string, number];
tuple = ["hi", 27];

// Enum

/**
 * JavaScript의 표준 자료형 집합과 사용하면 도움이 될만한 데이터 형은 enum입니다.
 * C# 같은 언어처럼, enum은 값의 집합에 더 나은 이름을 붙여줄 수 있습니다.
 */

enum Color {
  Red,
  Green,
  Blue,
}
