const a = "abc";

function getB(n: number = 10) {
  const c = "hi";
  return n + c;
}

10 + "10"; //1010

interface Dropdown<T> {
  value: T;
  title: string;
}

interface DetailedDropdown<T> extends Dropdown<T> {
  desc: string;
  tag: T;
}

const shoppingItem: Dropdown<Function> = {
  value: (a) => a + 10,
  title: "Never be the same",
};

const detailedItem: DetailedDropdown<string> = {
  title: "shoes",
  desc: "nike",
  value: "day breaker",
  tag: "today",
};

// Best Common Type
const arr = [1, 2, 3, true, false, "a"];
