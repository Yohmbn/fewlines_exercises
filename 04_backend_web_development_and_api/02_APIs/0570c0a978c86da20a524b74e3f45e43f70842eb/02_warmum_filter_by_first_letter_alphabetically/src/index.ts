import { Customer } from "../data/customers";

export function filterByFirstLetter(customerList : Customer[], letter : string): Customer[] {
  const a : Customer[] = [];
  if (letter.length === 1){
  for (let index = 0; index < customerList.length; index++) {
    if (customerList[index].last_name[0] === letter) {
      a.push(customerList[index])
    }
  }
} else {
  return a
}
  return a
}

export function filterByFirstLetterOrdered(customerList: Customer[],letter:string):Customer[]{
  return filterByFirstLetter(customerList,letter).sort(function(a, b) {
    const nameA = a.last_name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.last_name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
})
}
