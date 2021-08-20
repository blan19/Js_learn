interface User {
  name: string;
  email: string;
  id: string;
}

// 변수 인터페이스
const junseo: User = {
  name: "Junseo Park",
  email: "oponize@naver.com",
  id: "20183403",
};

// 함수 인터페이스 활용

const getUser = (user: User): void => {
  console.log(user);
};

// 함수 스펙 인터페이스 활용

interface SumFunction {
  (a: number, b: number): number;
}

const getSum: SumFunction = (a: number, b: number): number => a + b;

// 인덱싱

interface StringArr {
  [index: number]: string;
}

const arr: StringArr = ["a", "b", "c"];

arr[0] = "1o0";

// 딕셔너리 패턴

interface StringRegexDictionary {
  [key: string]: RegExp;
}

const obj: StringRegexDictionary = {
  cssFile: /\.css$/,
  jsFile: /\.js$/,
};

// 인터페이스 확장 (상속)
interface Person {
  name: string;
  age: number;
}

interface Deverloper extends Person {
  language: string;
}

const juns: Deverloper = {
  language: "js, ts",
  age: 100,
  name: "Junseo Park",
};
