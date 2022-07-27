// * 프로그래머스

// ! 인풋
// const fees = [180, 5000, 10, 600],
//   records = [
//     "05:34 5961 IN",
//     "06:00 0000 IN",
//     "06:34 0000 OUT",
//     "07:59 5961 OUT",
//     "07:59 0148 IN",
//     "18:59 0000 IN",
//     "19:09 0148 OUT",
//     "22:59 5961 IN",
//     "23:00 5961 OUT",
//   ];

const fees = [1, 461, 1, 10],
  records = ["00:00 1234 IN"];

// ! 솔루션
function solution(fees, records) {
  let answer = [];
  let hash = {};
  const _map = new Map();
  records.forEach((record) => {
    const [time, number] = record.split(" ");
    const [hh, mm] = time.split(":");

    // * 맵에 저장
    if (_map.has(number)) {
      // * 시간 차 계산
      const diff = calc(hh, mm) - _map.get(number);
      // * 맵 딜리트 후 해쉬에 저장
      _map.delete(number);
      if (hash[number]) hash[number] = hash[number] + diff;
      else hash[number] = diff;
    } else {
      _map.set(number, calc(hh, mm));
    }
  });

  // * 맵에 값이 남아있을 경우
  if (_map.size) {
    for (const [key, value] of _map) {
      const diff = calc("23", "59") - value;
      if (hash[key]) hash[key] = hash[key] + diff;
      else hash[key] = diff;
    }

    _map.clear();
  }

  // * 주차 요금 계산
  for (const [key, value] of Object.entries(hash)) {
    const [baseTime, baseFee, a, b] = fees;
    // * 기본 시간 보다 적을 경우와 큰 경우 조건 처리
    if (baseTime < value) {
      const fee = baseFee + Math.ceil((value - baseTime) / a) * b;
      answer.push([parseInt(key), fee]);
    } else {
      answer.push([parseInt(key), baseFee]);
    }
  }

  return answer.sort((a, b) => a[0] - b[0]).map((val) => val[1]);
}

function calc(hh, mm) {
  const time = parseInt(hh) * 60 + parseInt(mm);
  return time;
}

// ! 주의사항

// ! 로직
// * 레코드 값을 맵에 저장하고 만약 그 값을 이미 가지고 있다면, out 처리한다.
// * 아웃 처리하면서 누적 시간 저장
// * 마지막에 아직도 맵에 값이 남아있다면 23:59에서 시간을 빼줌
// * 누적 시간은 해쉬에 저장
// * 차량번호가 작은 순으로 정렬해서 리턴

// ! 아웃풋
console.log(solution(fees, records));

// ! best
