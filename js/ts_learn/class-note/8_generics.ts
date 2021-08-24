// const logText = (text) => {
//   console.log(text);
//   return text;
// };

// logText("hello");
// logText(10);
// logText(true);

// const logText = <T>(text: T): T => {
//   console.log(text);
//   return text;
// };

// logText<number>(10);
// logText("Hello..!");

const logText = (text: number | string) => {
  // 교집합만 자동완성 지원
  console.log(text);
  return text;
};

const a = logText(10); // 교집합
logText("egw");

const genericLog = <T>(text: T): T => {
  console.log(text);

  return text;
};

const b = genericLog<string>("hi");
b.split("");
const c = genericLog<number>(10);
a.toString();

// 제네릭은 마치 함수의 인자와 비슷
// 유연하게 타입을 변경 가능하다

// 제네릭의 타입 제한 - 1
const logTextLength = <T>(text: T[]): T[] => {
  text.length;
  return text;
};

const d = logTextLength<string>(["h1"]);

// 제네릭 타입 제한 2 - 정의된 타입 사용
// 확장
interface Test {
  length: number;
}

const extendsGeneric = <T extends Test>(text: T): T => {
  // 제네릭의 추가 정의
  text.length;
  return text;
};

// 제네릭 타입 제한 3 - keyof
interface ShoppinItemOption {
  name: string;
  price: number;
  stock: number;
}

// 값중에 하나만 받도록 제한
const getShoppingItemOption = <T extends keyof ShoppinItemOption>(
  itemOption: T
): T => {
  return itemOption;
};

getShoppingItemOption("name");
