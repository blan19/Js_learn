enum Shoes {
  // 별도의 값을 주지 않는다면 숫자형 이넘으로 인식
  // 1씩 증가하는 형태
  Nike,
  Adidas,
  Puma,
}

const myShoes = Shoes.Nike;

// enum 활용
enum Answer {
  Yes = "Y",
  No = "N",
}
// const askQeustion = (answer: string): void => {
//   if (answer === "yes") {
//     console.log("정답입니다");
//   }
//   if (answer === "no") {
//     console.log("오답입니다");
//   }
// };

// askQeustion("예스");
// askQeustion("y");
// askQeustion("yes");

// 범위를 정해줘 복잡성을 낮춰주고 예외 처리에 도움이 되어 준다
const askQeustion = (answer: Answer): void => {
  if (answer === Answer.Yes) {
    console.log("정답");
  }
  if (answer === Answer.No) {
    console.log("오답");
  }
};

askQeustion(Answer.Yes);
