// ts 함수 선언
// 함수 파라미터 타입 정의
const sum = (a: number, b: number) => {
  return a + b;
};

// 함수 반환 값 타입 정의
const add = (a, b): number => {
  return a + b;
};

// 종합
const total = (a: number, b: number): number => {
  return a + b;
};

// 옵셔널 파라미터
// ex) total(10, 20, 30)
const log = (a: string, b?: string) => {
  console.log(a, b);
};

log("hi");
log("hi", "hello");
