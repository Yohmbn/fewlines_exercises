type Profile = {
  name: string;
  age: number;
  country: string;
  haveTraveled: boolean;
};

export function assembleData(names : string[], ages : number[],countries:string[],haveTraveled:boolean[]): Profile[] {
  const a : Profile[] = []
  for ( let index = 0; index < names.length; index++) {
    const b : Profile = {
      name : names[index],
      age : ages[index],
      country : countries[index],
      haveTraveled : haveTraveled[index]
    }
    a.push(b)
  }
  return a
}
