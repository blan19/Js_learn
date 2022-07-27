// * 프로그래머스

// ! 인풋
const tickets = [
  ["ICN", "JFK"],
  ["HND", "IAD"],
  ["JFK", "HND"],
];

// const tickets = [
//   ["ICN", "SFO"],
//   ["ICN", "ATL"],
//   ["SFO", "ATL"],
//   ["ATL", "ICN"],
//   ["ATL", "SFO"],
// ];

// const tickets = [
//   ["ICN", "A"],
//   ["ICN", "B"],
//   ["B", "ICN"],
// ];

// const tickets = [
//   ["ICN", "BOO"],
//   ["ICN", "COO"],
//   ["COO", "DOO"],
//   ["DOO", "COO"],
//   ["BOO", "DOO"],
//   ["DOO", "BOO"],
//   ["BOO", "ICN"],
//   ["COO", "BOO"],
// ];

// ! 솔루션
function solution(tickets) {
  let answer = [];
  let travers = {};
  tickets.forEach((ticket) => {
    if (travers[ticket[0]])
      travers[ticket[0]] = [...travers[ticket[0]], ticket[1]].sort((a, b) => {
        return a.charCodeAt() - b.charCodeAt();
      });
    else travers[ticket[0]] = [ticket[1]];
    if (travers[ticket[1]]) travers[ticket[1]] = [...travers[ticket[1]]];
    else travers[ticket[1]] = [];
  });

  let visited = Object.entries(travers).map(([key, values]) => ({
    key,
    values: values.map(() => false),
  }));

  function dfs(key) {
    answer.push(key);
    for (let i = 0; i < travers[key].length; i++) {
      if (
        visited[visited.findIndex((el) => el.key === key)].values[i] !== true
      ) {
        if (!travers[travers[key][i]].length && travers[key][i + 1]) {
          const temp = travers[key][i];
          travers[key][i] = travers[key][i + 1];
          travers[key][i + 1] = temp;
          visited[visited.findIndex((el) => el.key === key)].values[i] = true;
          dfs(travers[key][i]);
        } else {
          visited[visited.findIndex((el) => el.key === key)].values[i] = true;
          dfs(travers[key][i]);
        }
      }
    }
  }
  dfs("ICN", 0);
  return answer;
}
// ! 주의사항

// ! 로직

// ! 아웃풋
console.log(solution(tickets));

// ! best

// function solution(tickets) {
//   let answer = [];
//   function DFS(tickets, start, plan) {
//     if (tickets.length == 0) {
//       answer.push(plan);
//     }
//     tickets.map((contry, i) => {
//       if (contry[0] == start) {
//         let copiedTicket = [...tickets];
//         copiedTicket.splice(i, 1);
//         DFS(copiedTicket, contry[1], [...plan, contry[1]]);
//       }
//     });
//   }
//   DFS(tickets, "ICN", ["ICN"]);
//   return answer.sort()[0];
// }
