// * 프로그래머스

// ! 인풋
const bridge_length = 2,
  weight = 10,
  truck_weights = [7, 4, 5, 6];

// const bridge_length = 100,
//   weight = 100,
//   truck_weights = [10];

// ! 솔루션
function solution(bridge_length, weight, truck_weights) {
  let answer = [];
  let queue = [...truck_weights];
  let time = 0;
  let times = [];

  while (true) {
    if (times.length === truck_weights.length) {
      break;
    }
    // 무게 확인과 다리 길이 확인
    if (
      answer.length < bridge_length &&
      sumWeight(answer, weight, queue[queue.length - 1])
    ) {
      answer.push(queue.shift());
    }

    time++;

    if (time > bridge_length) {
      times.push(time);
      answer.shift();
      time = 1;
    }
  }

  return times.reduce((acc, cur) => acc + cur, 0);
}

function sumWeight(arr, weight, nextWeight) {
  const sum = arr.reduce((acc, cur) => acc + cur, 0);
  return sum + nextWeight <= weight ? true : false;
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(bridge_length, weight, truck_weights));

// ! best
