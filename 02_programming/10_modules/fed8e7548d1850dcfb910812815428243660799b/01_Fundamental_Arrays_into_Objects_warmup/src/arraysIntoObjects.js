const arraysIntoObjects = (keysArray, valuesArray) => {
  let listeOrganisé = [];
  for (let index = 0; index < keysArray.length; index++) {
    const liste = [keysArray[index], valuesArray[index]];
    listeOrganisé.push(liste);
  }
  const obj = Object.fromEntries(listeOrganisé);
  return obj;
};

console.log(arraysIntoObjects);
// Don't change this line for tests to run properly
export default arraysIntoObjects;
