interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

const person: Person = {
  firstName: "Junseo",
  lastName: "Park",
  age: 27,
};

type Check = keyof Person; // ("firstName, lastName, age")

function setProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
  obj[key] = value;
}

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

setProperty(person, "firstName", "Hi");
