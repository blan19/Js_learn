// * 프로그래머스

// ! 인풋
const cacheSize = 3,
  cities = [
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
  ];

// ! 솔루션
function solution(n, wires) {
  let answer = 0;
  let cash = [];

  if (cacheSize === 0) {
    return cities.length * 5;
  }

  cities.forEach((city) => {
    city = city.toLowerCase();
    const exist = cash.indexOf(city);
    // * 캐쉬 배열 사이즈가 캐쉬 사이즈랑 같을 경우
    if (cash.length === cacheSize) {
      // * 캐쉬에 도시가 존재할 경우
      // * 캐쉬 값 순서 변경하고 리턴
      if (exist !== -1) {
        cash.splice(exist, 1);
        cash.push(city);
        answer += 1;
      } else {
        //* 존재하지 않는다면 삭제 후 삽입
        cash.shift();
        cash.push(city);
        answer += 5;
      }
    } else {
      // * 캐쉬를 캐쉬 사이즈 만큼 삽입하면서 중복 체크
      if (exist !== -1) {
        cash.splice(exist, 1);
        cash.push(city);
        answer += 1;
      } else {
        cash.push(city);
        answer += 5;
      }
    }
  });

  return answer;
}

// ! 주의사항

// ! 로직
// * 적은 빈도
// * 교체

// ! 아웃풋
console.log(solution(cacheSize, cities));

// ! best
