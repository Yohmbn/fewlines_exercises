import { capitalize } from "./capitalize"

export function context(sentence: string): string {
  const splsentence = sentence.split(" ")
  const a :string[] = []
  for (let index = 0; index < splsentence.length; index++) {
    a.push(capitalize(splsentence[index]))

  }


  return a.join().replace(/,/g," ")
}
