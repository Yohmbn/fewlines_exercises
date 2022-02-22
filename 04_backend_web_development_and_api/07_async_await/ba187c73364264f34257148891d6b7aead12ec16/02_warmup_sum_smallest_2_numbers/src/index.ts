export function sumTwoSmallestNumbers(numbers:number[]): number{
  if (numbers.length < 4 || numbers.every(x => x >= 0) === false) {
    throw "error"
  } else{
  const min1 = Math.min(...numbers)
  const numbers2 = numbers.filter(element => element > min1 )
  const min2 = Math.min(...numbers2)

  return min1 + min2
  }
}
