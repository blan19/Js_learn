class Junseo {
  constructor(info) {
    this.first = info.first;
    this.second = info.second;
  }
  max() {
    return Math.max(this.first, this.second);
  }
}

const junseo = new Junseo({ first: 10, second: 20 });
// console.log(junseo.max());
console.log(junseo.__proto__);

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.multi = function () {
  return this.age * 2;
};

const person = new Person("junseo", 27);
console.log(person.multi());
