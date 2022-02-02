function filterFor<ArrayElementValue,ResultElementValue>(array: ArrayElementValue[], predicate : (element : ArrayElementValue)=> ResultElementValue): ArrayElementValue[] {
  const resultArray = [];

  for (const element of array) {
    if (predicate(element)) {
      resultArray.push(element)
    }
  }

  return resultArray;
}

export { filterFor }
