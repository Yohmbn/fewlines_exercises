export function line(numberOfStars: number): string {
  let lineOfStars = ""
  for (let index = 0; index < numberOfStars; index++) {
    lineOfStars = lineOfStars + "*"
  }
  return lineOfStars
}
