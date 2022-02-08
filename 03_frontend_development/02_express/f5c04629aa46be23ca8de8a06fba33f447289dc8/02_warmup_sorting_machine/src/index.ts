export function numberSort(a:number,b:number):number {
  return a - b;
}

export function sortingMachine(x:number[],y:boolean): number[]{
  if (y === true){
return x.sort(numberSort)
} else{
  return x.sort(numberSort).reverse()
}
}

console.log(sortingMachine([10000, 104, 99, 2000, 3000, 1500], false))
