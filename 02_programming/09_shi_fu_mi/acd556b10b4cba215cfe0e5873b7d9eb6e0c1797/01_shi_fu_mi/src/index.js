const { platform } = require("os");
const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Welcome to ShiFuMi");

const ROCK = [
  "    ________        ",
  "---'   _ ,  |       ",
  "      (__(__)       ",
  "      (_____)       ",
  "      (____)        ",
  "---.__(___)         ",
];

const PAPER = [
  "      _______       ",
  "----'    ____)____  ",
  "            _______)",
  "            _______)",
  "           _______) ",
  "----.__________)    ",
];

const SCISSORS = [
  "    ____           ",
  "---'    |________  ",
  "     (__)________) ",
  "        _________) ",
  "      (____)       ",
  "---.__(___)        ",
];

// Inverse le sens des éléments du dessus
function inverse(choice = ROCK) {
  for (let i = 0; i < choice.length; i++) {
    console.log([[[...choice[i]].reverse().join("")].join("")]);
  }
}

//shiFuMI Player vs IA début

function choixJoueur(choice = 1) {
  console.log("Player Move\n");

  switch (choice) {
    case "1":
      console.log(ROCK);
      break;
    case "2":
      console.log(PAPER);
      break;
    case "3":
      console.log(SCISSORS);
      break;
  }
}
function choixCPU(choice = 1) {
  console.log("CPU Move");
  console.log(" ");

  switch (choice) {
    case "1":
      inverse(ROCK);
      break;
    case "2":
      inverse(PAPER);
      break;
    case "3":
      inverse(SCISSORS);
      break;
  }
}

function tryAgain() {
  reader.question("Play again ?(Y,n)", (PlayerChoice) => {
    if (PlayerChoice === "y" || PlayerChoice === "Y") {
      shiFuMi();
    } else if (PlayerChoice === "n" || PlayerChoice === "N") {
      console.log("Thanks for the game 😉");
      reader.close;
    } else {
      console.log("Input an Y or an n");
      tryAgain();
    }
  });
}

function shiFuMi() {
  reader.question("Please choose a move\nRock Paper Scissors? [1,2,3] ", (PlayerMove) => {
    // Handle the move
    if (PlayerMove === "1" || PlayerMove === "2" || PlayerMove === "3") {
      const indiceCPUmove = Math.round(Math.random() * 2);
      let CPUmove = ["1", "2", "3"];
      choixJoueur(PlayerMove);
      choixCPU(CPUmove[indiceCPUmove]);
      if (CPUmove[indiceCPUmove] === PlayerMove) {
        console.log("Equality!!!Try again");
        console.log(" ");
        shiFuMi();
      } else if (PlayerMove === "1") {
        switch (CPUmove[indiceCPUmove]) {
          case "2":
            console.log("\nThe Player lost !!!\n\n");

            tryAgain();
            break;
          case "3":
            console.log("\nThe Player won !!!\n\n");
            tryAgain();
            break;
        }
      } else if (PlayerMove === "2") {
        switch (CPUmove[indiceCPUmove]) {
          case "3":
            console.log("\nThe Player lost !!!\n\n");
            tryAgain();
            break;
          case "1":
            console.log("\nThe Player won !!!\n\n");
            tryAgain();
            break;
        }
      } else if (PlayerMove === "3") {
        switch (CPUmove[indiceCPUmove]) {
          case "1":
            console.log("\nThe Player lost !!!\n\n");
            tryAgain();
            break;
          case "2":
            console.log("\nThe Player won !!!\n\n");
            tryAgain();
            break;
        }
      }
    } else {
      console.log("Input 1, 2 or 3");
      shiFuMi();
    }
  });
}

//shiFuMi Player vs IA fin;

//shiFuMi Player vs Player début

function tryAgain2P() {
  reader.question("Play again ?(Y,n)", (PlayerChoice) => {
    if (PlayerChoice === "y" || PlayerChoice === "Y") {
      Shifumi2P();
    } else if (PlayerChoice === "n" || PlayerChoice === "N") {
      console.log("Thanks for the game 😉");
    } else {
      console.log("Input an Y or an n");
      tryAgain2P();
    }
  });
}

function choixPlayer1(x = 1) {
  console.log("Player1 Move");
  console.log(" ");
  switch (x) {
    case "1":
      console.log(ROCK);
      break;
    case "2":
      console.log(PAPER);
      break;
    case "3":
      console.log(SCISSORS);
      break;
  }
}
function choixPlayer2(a = 1) {
  console.log("Player 2 Move");
  console.log(" ");

  switch (a) {
    case "1":
      inverse(ROCK);
      break;
    case "2":
      inverse(PAPER);
      break;
    case "3":
      inverse(SCISSORS);
      break;
  }
}

function Shifumi2P() {
  reader.question("Please Player 1 choose a move\nRock Paper Scissors? [1,2,3] ", (Player1Move) => {
    if (Player1Move === "1" || Player1Move === "2" || Player1Move === "3") {
      reader.question("Please Player 2 choose a move\nRock Paper Scissors? [1,2,3] ", (Player2Move) => {
        if (Player2Move === "1" || Player2Move === "2" || Player2Move === "3") {
          choixPlayer1(Player1Move);
          choixPlayer2(Player2Move);
          if (Player1Move === Player2Move) {
            console.log("Equality!!!Try again");
            console.log(" ");
            Shifumi2P();
          } else if (Player1Move === "1") {
            switch (Player2Move) {
              case "2":
                console.log("\nThe Player1 lost !!!\nThe Player2 won!!!\n\n");

                tryAgain2P();
                break;
              case "3":
                console.log("\nThe Player 1 won !!!\nThe Player 2 lost!!!\n\n");
                tryAgain2P();
                break;
            }
          } else if (Player1Move === "2") {
            switch (Player2Move) {
              case "3":
                console.log("\nThe Player1 lost !!!\nThe Player2 won!!!\n\n");
                tryAgain2P();
                break;
              case "1":
                console.log("\nThe Player 1 won !!!\nThe Player 2 lost!!!\n\n");
                tryAgain2P();
                break;
            }
          } else if (Player1Move === "3") {
            switch (Player2Move) {
              case "1":
                console.log("\nThe Player1 lost !!!\nThe Player2 won!!!\n\n");
                tryAgain2P();
                break;
              case "2":
                console.log("\nThe Player 1 won !!!\nThe Player 2 lost!!!\n\n");
                tryAgain2P();
                break;
            }
          }
        } else {
          console.log(" Wrong input from Player 2. Put 1, 2 or 3");
          Shifumi2P();
        }
      });
    } else {
      console.log(" Player 1 Input 1, 2 or 3");
      Shifumi2P();
    }
  });
}

//Shifumi Player vs Player fin

// Shifumi Best 3 games début

function tryAgainBest3() {
  reader.question("Play again ?(Y,n)", (PlayerChoice) => {
    if (PlayerChoice === "y" || PlayerChoice === "Y") {
      ShifumiBest3();
    } else if (PlayerChoice === "n" || PlayerChoice === "N") {
      console.log("Thanks for the game 😉");
    } else {
      console.log("Input an Y or an n");
      tryAgainBest3();
    }
  });
}

let victoire1 = 0;
let victoire2 = 0;

function ShifumiBest3() {
  reader.question("Please Player 1 choose a move\nRock Paper Scissors? [1,2,3] ", (Player1Move) => {
    if (Player1Move === "1" || Player1Move === "2" || Player1Move === "3") {
      reader.question("Please Player 2 choose a move\nRock Paper Scissors? [1,2,3] ", (Player2Move) => {
        if (Player2Move === "1" || Player2Move === "2" || Player2Move === "3") {
          choixPlayer1(Player1Move);
          choixPlayer2(Player2Move);
          if (Player1Move === Player2Move) {
            console.log("Equality!!!Try again");
            console.log(" ");
            ShifumiBest3();
          } else if (Player1Move === "1") {
            switch (Player2Move) {
              case "2":
                victoire2++;
                console.log("\nThe Player1 lost !!!\nThe Player2 won!!!\n\n");
                if (victoire2 === 3) {
                  console.log("Player 2 is The Winner, The Myth, The Legend\n\n");
                  victoire1 = 0;
                  victoire2 = 0;
                  tryAgainBest3();
                } else {
                  console.log(`Victories Player 1 : ${victoire1}\nVictories Player 2 : ${victoire2}\n\n`);
                  ShifumiBest3();
                }
                break;
              case "3":
                victoire1++;
                console.log("\nThe Player 1 won !!!\nThe Player 2 lost!!!\n\n");
                if (victoire1 === 3) {
                  console.log("Player 1 is The Winner,The Myth,The Legend\n\n");
                  victoire1 = 0;
                  victoire2 = 0;
                  tryAgainBest3();
                } else {
                  console.log(`Victories Player 1 : ${victoire1}\nVictories Player 2 : ${victoire2}\n\n`);
                  ShifumiBest3();
                }

                break;
            }
          } else if (Player1Move === "2") {
            switch (Player2Move) {
              case "3":
                victoire2++;
                console.log("\nThe Player1 lost !!!\nThe Player2 won!!!\n\n");
                if (victoire2 === 3) {
                  console.log("Player 2 is The Winner, The Myth, The Legend\n\n");
                  victoire1 = 0;
                  victoire2 = 0;
                  tryAgainBest3();
                } else {
                  console.log(`Victories Player 1 : ${victoire1}\nVictories Player 2 : ${victoire2}\n\n`);
                  ShifumiBest3();
                }
                break;
              case "1":
                victoire1++;
                console.log("\nThe Player 1 won !!!\nThe Player 2 lost!!!\n\n");
                if (victoire1 === 3) {
                  console.log("Player 1 is The Winner,The Myth,The Legend\n\n");
                  victoire1 = 0;
                  victoire2 = 0;
                  tryAgainBest3();
                } else {
                  console.log(`Victories Player 1 : ${victoire1}\nVictories Player 2 : ${victoire2}\n\n`);
                  ShifumiBest3();
                }
                break;
            }
          } else if (Player1Move === "3") {
            switch (Player2Move) {
              case "1":
                victoire2++;
                console.log("\nThe Player1 lost !!!\nThe Player2 won!!!\n\n");
                if (victoire2 === 3) {
                  console.log("Player 2 is The Winner, The Myth, The Legend\n\n");
                  victoire1 = 0;
                  victoire2 = 0;
                  tryAgainBest3();
                } else {
                  console.log(`Victories Player 1 : ${victoire1}\nVictories Player 2 : ${victoire2}\n\n`);
                  ShifumiBest3();
                }
                break;
              case "2":
                victoire1++;
                console.log("\nThe Player 1 won !!!\nThe Player 2 lost!!!\n\n");
                if (victoire1 === 3) {
                  console.log("Player 1 is The Winner,The Myth,The Legend\n\n");
                  victoire1 = 0;
                  victoire2 = 0;
                  tryAgainBest3();
                } else {
                  console.log(`Victories Player 1 : ${victoire1}\nVictories Player 2 : ${victoire2}\n\n`);
                  ShifumiBest3();
                }
                break;
            }
          }
        } else {
          console.log(" Wrong input from Player 2. Put 1, 2 or 3");
          Shifumi2P();
        }
      });
    } else {
      console.log(" Player 1 Input 1, 2 or 3");
      Shifumi2P();
    }
  });
}

//Shifumi best 3 games fin

// fonction en cours : choix des modes
// function ChooseMode() {
//   reader.question("Which mode do you want to play? [1,2,3] ", (PlayerMove) => {

//   });
// }
