// * 프로그래머스

// ! 인풋
// const cacheSize = 3,
//   cities = [
//     "Jeju",
//     "Pangyo",
//     "Seoul",
//     "NewYork",
//     "LA",
//     "Jeju",
//     "Pangyo",
//     "Seoul",
//     "NewYork",
//     "LA",
//   ];

const cacheSize = 3,
  cities = [
    "Jeju",
    "Pangyo",
    "Seoul",
    "Jeju",
    "Pangyo",
    "Seoul",
    "Jeju",
    "Pangyo",
    "Seoul",
  ];

// const cacheSize = 2;
// cities = [
//   "Jeju",
//   "Pangyo",
//   "Seoul",
//   "NewYork",
//   "LA",
//   "SanFrancisco",
//   "Seoul",
//   "Rome",
//   "Paris",
//   "Jeju",
//   "NewYork",
//   "Rome",
// ];

// const cacheSize = 5;
// cities = [
//   "Jeju",
//   "Pangyo",
//   "Seoul",
//   "NewYork",
//   "LA",
//   "SanFrancisco",
//   "Seoul",
//   "Rome",
//   "Paris",
//   "Jeju",
//   "NewYork",
//   "Rome",
// ];

// const cacheSize = 2;
// cities = ["Jeju", "Pangyo", "NewYork", "newyork"];

// const cacheSize = 0;
// cities = ["Jeju", "Pangyo", "Seoul", "NewYork", "LA"];

// const cacheSize = 10,
//   cities = ["1", "2", "3", "2"];

// const cacheSize = 3,
//   cities = ["A", "B", "A"];

// ! 솔루션
function solution(cacheSize, cities) {
  let time = 0;
  let cash = [];

  if (cacheSize === 0) {
    return cities.length * 5;
  }

  cities.forEach((city, idx) => {
    city = city.toLowerCase();
    const exist = cash.indexOf(city);
    // * 캐쉬 배열 사이즈가 캐쉬 사이즈랑 같을 경우
    if (cash.length === cacheSize) {
      // * 캐쉬에 도시가 존재할 경우
      // * 캐쉬 값 순서 변경하고 리턴
      if (exist !== -1) {
        cash.splice(exist, 1);
        cash.push(city);
        time += 1;
      } else {
        //* 존재하지 않는다면 삭제 후 삽입
        cash.shift();
        cash.push(city);
        time += 5;
      }
    } else {
      // * 캐쉬를 캐쉬 사이즈 만큼 삽입하면서 중복 체크
      if (exist !== -1) {
        cash.splice(exist, 1);
        cash.push(city);
        time += 1;
      } else {
        cash.push(city);
        time += 5;
      }
    }
  });

  return time;
}

// * 캐쉬에 값이 있는지 확인하고 있다면, 캐쉬 값의 순서를 바꿔서 리턴.
function cashCheck(cash, value) {
  const exist = cash.findIndex(value);
  return exist !== -1 ? true : false;
}

// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(cacheSize, cities));

// ! best
// function solution(cacheSize, cities) {
//   const MISS = 5,
//     HIT = 1;

//   if (cacheSize === 0) return MISS * cities.length;

//   let answer = 0,
//     cache = [];

//   cities.forEach((city) => {
//     city = city.toUpperCase();

//     let idx = cache.indexOf(city);

//     if (idx > -1) {
//       cache.splice(idx, 1);
//       answer += HIT;
//     } else {
//       if (cache.length >= cacheSize) cache.shift();
//       answer += MISS;
//     }

//     cache.push(city);
//   });

//   return answer;
// }

// function solution(cacheSize, cities) {
//   if (!cacheSize) return cities.length * 5;

//   const cache = [];
//   let time = 0;
//   for (const city of cities) {
//     const city_low = city.toLowerCase();
//     if (cache.includes(city_low)) {
//       cache.splice(cache.indexOf(city_low), 1);
//       cache.push(city_low);
//       time++;
//       continue;
//     }

//     cache.push(city_low);
//     time += 5;

//     if (cache.length > cacheSize) cache.shift();
//   }

//   return time;
// }

// function solution(cacheSize, cities) {
//   var answer = 0;
//   let cache = [];
//   if (cacheSize === 0) return 5 * cities.length;
//   for (const city of cities) {
//     const cityLC = city.toLowerCase();
//     if (cache.includes(cityLC)) {
//       cache.splice(cache.indexOf(cityLC), 1);
//       cache.unshift(cityLC);
//       answer += 1;
//     } else {
//       if (cache.length >= cacheSize) cache.pop();
//       cache.unshift(cityLC);
//       answer += 5;
//     }
//   }
//   return answer;
// }
