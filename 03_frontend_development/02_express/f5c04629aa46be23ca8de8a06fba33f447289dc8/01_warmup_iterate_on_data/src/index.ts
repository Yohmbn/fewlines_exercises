type CustomerType = {
  id: number;
  first_name: string,
  last_name: string,
  email: string,
  gender: string
};



export function getEmails(array: CustomerType[]): string[]{
  const a :string [] = []
  for (let index = 0; index < array.length; index++) {
    a.push(array[index].email)
  }
return a
}
