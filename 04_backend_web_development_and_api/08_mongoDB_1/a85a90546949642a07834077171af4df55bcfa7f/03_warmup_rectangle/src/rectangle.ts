export function rectangle(width: number, height: number): string {
  let etoile = ""
  for (let index = 0; index < width; index++) {
    etoile = etoile + "*"
  }

let figure = ""
for (let index = 0; index < height; index++) {
  figure = figure + `${etoile}\n`

}
return figure
}
