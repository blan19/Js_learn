// ts 타입

// 문자열
const tsString: string = "hello";
// 넘버
const tsNumber: number = 1;
// 배열
const tsArr1: Array<number> = [1, 2];
const tsArr2: Array<string> = ["hello", "bye"];
const tsArr3: number[] = [1, 2, 3];
// 튜플
// 모든 인덱스에 대한 타입 정의
const tsTuple1: [string, number] = ["hello", 1];
// 객체
const tsObj: object = {};
const tsPerson1: object = {
  name: "Junseo",
  abe: 100,
};
const tsPerson2: { name: string; age: number } = {
  name: "Junseo",
  age: 10,
};
// 진위값
const tsLoading: boolean = false;
