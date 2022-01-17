function greetOnePerson(person) {
  console.log(`Hello ${person}!`);
}

function greeter(people) {
  if (Array.isArray(people) && people.every((item) => typeof item === "string")) {
    people.forEach(greetOnePerson);
  }
}

// Do not remove the following lines, it is for tests
module.exports = greeter;
