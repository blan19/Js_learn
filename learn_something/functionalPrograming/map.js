const products = [
  { name: "반팔티", price: 15000 },
  { name: "긴팔티", price: 20000 },
  { name: "핸드폰케이스", price: 15000 },
  { name: "후드티", price: 30000 },
  { name: "바지", price: 25000 },
];

// 함수형 프로그래밍에서는 인자와 리턴값으로 소통하는 것을 권장

// map

const names = [];
for (const item of products) {
  names.push(item.name);
}

const prices = [];
for (const item of products) {
  names.push(item.prices);
}

const map = (f, iter) => {
  const res = [];
  for (const item of iter) {
    res.push(f(item));
  }
  return res;
};

// 이터러블 프로토콜을 따른 map의 다형성
// 프로토타입 기반, 클래스 기반의 뿌리를 가진 값만 사용할수 있는 map 기법보다 유연하고 다형성을 더 가진다
// D.O.M의 메서드인 퀴리셀럭터올 같은 경우는 내장하고 있는 map이 없기 때문에 쓰지 못한다

function* gen() {
  yield 2;
  if (false) yield 3;
  yield 4;
}

const res = map((a) => a * a, gen());
console.log(res);
