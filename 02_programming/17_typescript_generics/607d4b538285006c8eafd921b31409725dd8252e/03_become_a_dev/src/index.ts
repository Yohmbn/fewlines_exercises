type Human = {
  name: string;
  age: number;
  knowsDev: boolean
};

type Dev = Human & { knownLanguage : string}

function becomeADev<Human,Dev>(object : Human) : Dev{
  object.knowsDev  = true;
  object.knownLanguage = "JavaScript"
  return object
}

// Leave the line below for tests to work properly.
export { becomeADev };
