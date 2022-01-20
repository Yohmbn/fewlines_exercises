const person = {
  firstname: "Abdel",
  lastname: "Sadki",
  age: 42,
  fullname: function () {
    return `${this.firstname} ${this.lastname}`;
  },
  introduceMyself: function () {
    return "Hello! I'm " + person.fullname() + " and I'm " + this.age + ".";
  },
};

const introduction = person.introduceMyself();
console.log(introduction);

module.exports = person;
