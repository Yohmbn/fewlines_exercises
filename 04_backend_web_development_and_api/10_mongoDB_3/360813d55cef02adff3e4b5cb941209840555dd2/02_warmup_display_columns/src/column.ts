export function column(numberOfLines: number, lineContent: string): string {
  let line : string = ""
   for (let index = 0; index < numberOfLines; index++) {
    line  = line + `${lineContent}\n`
  }
  return line
}
