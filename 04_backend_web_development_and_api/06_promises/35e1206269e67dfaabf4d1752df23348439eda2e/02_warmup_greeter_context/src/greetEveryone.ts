type ParamRest = string[];

export function greetEveryone(...rest : ParamRest): void {
  for (let index = 0; index < rest.length; index++) {
    console.log(`Welcome to ${rest[index]}`)
  }
}
