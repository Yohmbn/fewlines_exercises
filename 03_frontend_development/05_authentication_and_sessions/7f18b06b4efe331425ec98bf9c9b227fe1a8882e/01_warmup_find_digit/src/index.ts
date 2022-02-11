export function findDigit(array : number[] , digit : number) : number[]{
  const NewArray : number[] = []
  for (let index = 0; index < array.length; index++) {
    if (array[index].toString().includes(digit.toString())) {
      NewArray.push(array[index])
    }

  }
  return NewArray
}
