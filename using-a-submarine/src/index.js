import movements from "./movements.js";

function Submarine(
  move = ["forward 5", "down 5", "forward 8", "up 3", "down 8", "forward 2"]
) {
  let horizontal = 0;
  let depth = 0;
  for (let i = 0; i < move.length; i++) {
    if (move[i].includes("forward")) {
      let changedMove = 0;
      changedMove = move[i].substring(8);
      changedMove = parseFloat(changedMove);
      horizontal = horizontal + changedMove;
    } else if (move[i].includes("up")) {
      let changedMove = 0;
      changedMove = move[i].substring(3);
      changedMove = parseFloat(changedMove);
      depth = depth - changedMove;
    } else if (move[i].includes("down")) {
      let changedMove = 0;
      changedMove = move[i].substring(5);
      changedMove = parseFloat(changedMove);
      depth = depth + changedMove;
    }
  }
  return `After following these instructions, you would have a horizontal position of ${horizontal} and a depth of ${depth}.(Multiplying these together produces ${
    horizontal * depth
  }.)`;
}

//console.log(Submarine()); // horizontal : 15, depth :10, horizontal*depth = 150
//console.log(Submarine(movements)); //horizontal : 1373 ,depth = 2 ,horizontal*depth = 2746

function NewSubmarine(
  move = ["forward 5", "down 5", "forward 8", "up 3", "down 8", "forward 2"]
) {
  let horizontal = 0;
  let depth = 0;
  let aim = 0;
  for (let i = 0; i < move.length; i++) {
    if (move[i].includes("forward")) {
      let changedMove = 0;
      changedMove = move[i].substring(8);
      changedMove = parseFloat(changedMove);
      horizontal = horizontal + changedMove;
      depth = depth + aim * changedMove;
    } else if (move[i].includes("up")) {
      let changedMove = 0;
      changedMove = move[i].substring(3);
      changedMove = parseFloat(changedMove);
      aim = aim - changedMove;
    } else if (move[i].includes("down")) {
      let changedMove = 0;
      changedMove = move[i].substring(5);
      changedMove = parseFloat(changedMove);
      aim = aim + changedMove;
    }
  }
  return `After following these instructions, you would have a horizontal position of ${horizontal} and a depth of ${depth}.(Multiplying these together produces ${
    horizontal * depth
  }.)`;
}

console.log(NewSubmarine()); //horizontal : 15, depth :60, horizontal*depth = 900
console.log(NewSubmarine(movements)); //horizontal : 1373, depth :57934, horizontal*depth = 79543382
