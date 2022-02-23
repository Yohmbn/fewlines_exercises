type Person = {
  firstName: string;
  lastName: string;
}

export function parseName(name: string): Person {
  const words = name.split(" ")
  const Person : Person = { firstName : words[0], lastName : words[1]
}
return Person
}
