const arr = [1, 5, 2, 6, 3, 7, 4];
const commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

const solution = (arr, commands) => {
  let answer = [];

  commands.map((mapItem) => {
    const temp = arr
      .filter(
        (filterItem, idx) => idx >= mapItem[0] - 1 && idx <= mapItem[1] - 1
      )
      .sort((a, b) => a - b);
    answer.push(temp[mapItem[2] - 1]);
  });

  return answer;
};
// function solution(array, commands) {
//     return commands.map(command => {
//         const [sPosition, ePosition, position] = command
//         const newArray = array
//             .filter((value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1)
//             .sort((a,b) => a - b)

//         return newArray[position - 1]
//     })
// }
