import { lottery_draw } from "./lottery_draw"
import { Draw } from "./types";

export function checkIfIWon(ticket: Draw): void {
  const a = lottery_draw();
  if (a[0] === ticket[0] && a[1] === ticket[1] && a[2] === ticket[2]){
    console.log("You won the lottery!");
  } else  {
    console.log("You lost...");
  }
}
