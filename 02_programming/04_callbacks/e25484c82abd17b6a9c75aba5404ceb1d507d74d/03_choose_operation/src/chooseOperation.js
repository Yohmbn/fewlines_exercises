function addition(a, b) {
  return a + b;
}

function substraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
}

function chooseOperation(a, b, func) {
  if (Number.isInteger(a) && Number.isInteger(b) && typeof func === "function") {
    switch (func) {
      case addition:
        console.log(addition(a, b));
        return addition(a, b);

      case substraction:
        return substraction(a, b);

      case multiplication:
        return multiplication(a, b);

      case division:
        return division(a, b);
    }
  } else {
    throw new Error("not good paremeters");
  }
}
chooseOperation(3, 5, division);

// Leave the line below for tests to work
module.exports = { chooseOperation, addition, substraction, multiplication, division };
