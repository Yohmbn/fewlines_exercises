import readline from "readline";
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function start() {
  console.log("Ready to compute operations!\n****************************");
}

function calculate() {
  start();
  reader.question("Enter the first number\n>", (FirstNumber) => {
    let NewFirstNumber = FirstNumber.replace(",", ".");
    let TransformedFN = Number.parseFloat(NewFirstNumber);
    if (typeof TransformedFN === "number") {
      reader.question("Enter the operation\n>", (Operation) => {
        if (Operation === "+" || Operation === "-" || Operation === "*" || Operation === "/") {
          reader.question("Enter the second number\n>", (SecondNumber) => {
            let NewSecondNumber = SecondNumber.replace(",", ".");
            let TransformedSN = Number.parseFloat(NewSecondNumber);
            if (typeof TransformedSN === "number") {
              switch (Operation) {
                case "+":
                  console.log(`${TransformedFN} + ${TransformedSN} = ${TransformedFN + TransformedSN}`);
                  reader.close();
                  break;
                case "-":
                  console.log(`${TransformedFN} - ${TransformedSN} = ${TransformedFN - TransformedSN}`);
                  reader.close();
                  break;
                case "*":
                  console.log(`${TransformedFN} * ${TransformedSN} = ${TransformedFN * TransformedSN}`);
                  reader.close();
                  break;
                case "/":
                  console.log(`${TransformedFN} / ${TransformedSN} = ${TransformedFN / TransformedSN}`);
                  reader.close();
                  break;
              }
            } else {
              console.log("so close...But wrong input mate, it must be a number\n");
              calculate();
            }
          });
        } else {
          console.log("WROOOOONNNNG!!!(cf Lex Luthor in 'Superman Returns')\nTry again!!! And better this time\n");
          calculate();
        }
      });
    } else {
      console.log("Input a number in there,are you dumb?!\n");
      calculate();
    }
  });
}

export default { calculate, start };
