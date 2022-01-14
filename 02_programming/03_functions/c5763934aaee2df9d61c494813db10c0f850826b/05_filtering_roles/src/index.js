function filteredRoles(persons, role1 = "Teacher") {
  // Code the function here.
  let tableau = [];
  if (persons[0].role === role1) {
    tableau.push(persons[0]);
  }
  if (persons[1].role === role1) {
    tableau.push(persons[1]);
  }
  if (persons[2].role === role1) {
    tableau.push(persons[2]);
  }
  if (persons[3].role === role1) {
    tableau.push(persons[3]);
  }
  console.log(tableau);
}

const newPersons = [
  { name: "name1", role: "role1" },
  { name: "name2", role: "Teacher" },
  { name: "name3", role: "Student" },
  { name: "name4", role: "Teacher" },
];

filteredRoles(newPersons, "Student");
// Do not remove lines below, it is for tests
module.exports = filteredRoles;
