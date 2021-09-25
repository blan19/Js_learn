interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person {
  return { name: "Junseo", age: 24, skill: "React" };
}

const Junseo = introduce();

if ((Junseo as Developer).skill) {
  const skill = (Junseo as Developer).skill;
  console.log(skill);
} else if ((Junseo as Person).age) {
  const age = (Junseo as Person).age;
  console.log(age);
}

function isDeveloper(target: Developer | Person): target is Developer {
  return (target as Developer).skill !== undefined;
}

if (isDeveloper(Junseo)) {
  Junseo.skill;
} else {
  Junseo.age;
}
