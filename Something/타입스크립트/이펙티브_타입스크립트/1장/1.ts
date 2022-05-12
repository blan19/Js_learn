const states = [
  { name: "Alabama", capitol: "Montgomery" },
  { name: "Alaska", capitol: "Juneau" },
  { name: "Arizona", capitol: "Phoenix" },
];

for (const state of states) {
  console.log(state.capitol);
}

const x = 2 + "2"; // "4"
// const y = null + 6; error

const arr = [1, 2];
arr[2].toString(); // error
