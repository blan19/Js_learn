// * Push Dominoes
// * 1 ~ 10만, nlog(n)

const pushDominoes = (dominoes) => {
  const origin = dominoes;
  const forces = Array(dominoes.length).fill(0);
  let force = 0;
  let answer = [];

  for (let i = 0; i < origin.length; i++) {
    if (origin[i] === "R") force = i;
    else if (origin[i] === "L") force = 0;
    else force = Math.max(force - 1, 0);
    forces[i] += force;
  }

  for (let i = origin.length - 1; i >= 0; i--) {
    if (origin[i] === "L") force = i;
    else if (origin[i] === "R") force = 0;
    else force = Math.max(force - 1, 0);
    forces[i] -= force;
  }

  for (const target of forces) {
    if (target > 0) answer.push("R");
    else if (target < 0) answer.push("L");
    else answer.push(".");
  }

  return answer.join("");
};

console.log(pushDominoes("RR.L"));
