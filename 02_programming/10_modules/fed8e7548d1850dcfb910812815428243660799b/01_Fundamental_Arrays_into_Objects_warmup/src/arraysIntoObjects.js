const arraysIntoObjects = (keysArray, valuesArray) => {
  let listeOrganis√© = [];
  for (let index = 0; index < keysArray.length; index++) {
    const liste = [keysArray[index], valuesArray[index]];
    listeOrganis√©.push(liste);
  }
  const obj = Object.fromEntries(listeOrganis√©);
  return obj;
};

console.log(arraysIntoObjects);
// Don't change this line for tests to run properly
export default arraysIntoObjects;
