let compteur = 0;

function sub(reader, min, max, compteur = 0) {
  reader.question("Enter a number\n", (reponse = "") => {
    let newMin = Math.ceil(min);
    let newMax = Math.floor(max);
    const a = Math.floor(Math.random() * (newMax - newMin + 1) + newMin);
    console.log([a, newMin, newMax, reponse]);
    if (Number.isInteger(reponse)) {
      if (reponse >= newMin && reponse <= newMax) {
        if (reponse > a) {
          console.log("Too high");

          sub(reader, min, max, compteur++);
        } else if (reponse < a - 1) {
          console.log("Too low");

          sub(reader, min, max, compteur++);
        } else {
          console.log("You won!");
          console.log(compteur);
        }
      } else {
        console.log("The number is between 1 and 100");
        i = i + 1;
        sub(reader, min, max);
      }
    } else {
      console.log("This was not a number");
      i = i + 1;
      sub(reader, min, max);
    }

    reader.close();
  });
}

function numberGameWithStats(reader, min = 1, max = 100) {
  console.log("Welcome!\nYou have to find the right number, between 1 and 100!\nGood luck!!");
  sub(reader, min, max);
  compteur = 0;
}

module.exports = numberGameWithStats;
