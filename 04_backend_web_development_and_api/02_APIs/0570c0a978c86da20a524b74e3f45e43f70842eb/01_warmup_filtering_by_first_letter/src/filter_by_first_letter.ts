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
