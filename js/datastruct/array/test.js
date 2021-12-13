// function getCommonData(kArray) {
//     let hashTable = {},
//     last, answer = [];

//     for (let i = 0; i < kArray.length; i++) {
//         let currentAraay = kArray[i];
//         // last 값 초기화
//         last = null;

//         for (let j = 0; j < currentAraay.length; j++) {
//             let currentElement = currentAraay[j];
//             // last 값이 현재 값과 다를때
//             if (last != currentElement) {
//                 // 해쉬테이블에 값이 없다면
//                 if (!hashTable[currentElement]) {
//                     // 없던 값이 므로 1
//                     hashTable[currentElement] = 1;
//                 } else {
//                     // 중복 수이므로 +1
//                     hashTable[currentElement]++;
//                 }
//             }
//             last = currentElement;
//         }
//     }

//     for (let prop in hashTable) {
//         // 해쉬테이블을 조회해서 프로퍼티의 값이 2차원 배열의 길이와 같다면 answer에 저장
//         if (hashTable[prop] == kArray.length) {
//             answer.push(parseInt(prop))
//         }
//     }

//     return answer;
// }

// console.log(getCommonData([
//     [1, 2, 3, 4],
//     [1, 2, 7, 8],
//     [1, 2]
// ]));
