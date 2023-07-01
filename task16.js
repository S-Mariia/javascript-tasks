// write a bind function

function bind(context, fn) {
  return function (...args) {
    fn.apply(context, args);
  };
}

function logPerson() {
  console.log(`Person ${this.name} ${this.age}`);
}

const person1 = { name: "Marta", age: 22 };
const person2 = { name: "Mariia", age: 24 };

bind(person1, logPerson)();
bind(person2, logPerson)();
