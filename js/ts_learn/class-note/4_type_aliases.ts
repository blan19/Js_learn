interface Person1 {
  name: string;
  age: number;
}

type Person2 = {
  name: string;
  age: number;
};

const junseo1: Person1 = {
  name: "junseo",
  age: 100,
};

// 타입은 구성을 볼수 있다 하지만 확장 X
const junseo2: Person2 = {
  name: "junseo",
  age: 100,
};

type MyString = string;
const str: MyString = "string";
