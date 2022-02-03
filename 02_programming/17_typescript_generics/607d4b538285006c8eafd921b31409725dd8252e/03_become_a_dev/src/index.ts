type Human = {
  name: string;
  age: number;
  knowsDev: boolean
};

type Dev = Human & { knownLanguage : string}

function becomeADev(object : Human) : Dev{
  const Dev : Dev = Object.assign(object, {knownLanguage : "JavaScript",knowsDev  : true})
  return Dev
}

// Leave the line below for tests to work properly.
export { becomeADev };
