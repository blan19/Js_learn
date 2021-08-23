// const logMessage = (value: string): void => {
//   console.log(value);
// };

// logMessage("asgqld");

// 유니온 타입 or 연산자에서 하나 뺀 |
// const logMessage = (value: string | number): void => {
//   console.log(value);
// };

// logMessage(100);

const buffer: Array<string | number> = [1, 2, 3, "gelo"];

const logMessage = (value: string | number): void => {
  // any 타입과는 달리 타입확인을 통해 함수 자동완성 가능
  if (typeof value === "number") {
    value.toLocaleString;
  }
  if (typeof value === "string") {
    value.length;
  }
  throw new TypeError("type is not string or number");
};

// #활용
interface Person {
  name: string;
  age: number;
}

interface Developer {
  name: string;
  stack: string;
}

const getSomeone = (someone: Developer | Person): void => {
  // 유니온으론 공통된 속성에만 접근 가능
  // someone.name
  // someone.stack
};

const intersection = (someone: Developer & Person): void => {
  // 인터섹션은 모두 포함
  someone.age;
  someone.name;
};
