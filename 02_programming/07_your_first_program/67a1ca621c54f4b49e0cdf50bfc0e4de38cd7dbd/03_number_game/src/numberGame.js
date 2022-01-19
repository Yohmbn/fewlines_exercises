function sub(reader, min, max) {
  reader.question("Enter a number\n", (reponse = "") => {
    let newMin = Math.ceil(min);
    let newMax = Math.floor(max);
    const a = Math.floor(Math.random() * (newMax - newMin + 1) + newMin);
    console.log([a, newMin, newMax, reponse]);
    if (Number.isInteger(reponse)) {
      if (reponse >= newMin && reponse <= newMax) {
        if (reponse > a) {
          console.log("Too high");
          sub(reader, min, max);
        } else if (reponse < a - 1) {
          console.log("Too low");
          sub(reader, min, max);
        } else {
          console.log("You won!");
        }
      } else {
        console.log("The number is between 1 and 100");
        sub(reader, min, max);
      }
    } else {
      console.log("This was not a number");
      sub(reader, min, max);
    }

    reader.close();
  });
}

function numberGame(reader, min = 1, max = 100) {
  console.log("Welcome!\nYou have to find the right number, between 1 and 100!\nGood luck!!");
  sub(reader, min, max);
}
module.exports = numberGame;
