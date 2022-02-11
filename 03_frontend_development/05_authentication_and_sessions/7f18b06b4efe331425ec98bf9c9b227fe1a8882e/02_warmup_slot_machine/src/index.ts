export function slotMachine(array : unknown[]):boolean{
  let a :number = 0
for (let index = 0; index < array.length-1; index++) {
  if (array[index]===array[index +1]){
    a = a +1
  }
}
if (a  === array.length-1) {
  return true
} else {
  return false

}
}
