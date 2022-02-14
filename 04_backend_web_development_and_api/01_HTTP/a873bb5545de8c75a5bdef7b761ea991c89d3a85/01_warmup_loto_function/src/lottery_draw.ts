type Draw = number[]

export function lottery_draw(): Draw {
  const array : Draw = []
  for (let index = 0; index < 6; index++) {
    array.push(Math.floor(Math.random() * 101));
  }
return array
}

