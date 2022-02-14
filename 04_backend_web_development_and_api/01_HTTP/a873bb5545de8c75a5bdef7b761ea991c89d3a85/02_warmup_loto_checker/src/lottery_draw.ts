import { Draw } from "./types";

export function lottery_draw(): Draw {
  const array : Draw = []
  for (let index = 0; index < 3; index++) {
    array.push(Math.floor(Math.random() * 4));
  }
return array
}
