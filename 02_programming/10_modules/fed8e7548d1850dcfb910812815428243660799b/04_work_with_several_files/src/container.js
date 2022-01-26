// There should be no import in this file. Only exports!

function serveACup(quantityInCentiliters) {
  if (this.litersOfCoffee - quantityInCentiliters >= 0) {
    this.litersOfCoffee -= quantityInCentiliters;
    return true;
  } else {
    return false;
  }
}

function fillWithLitersOfCoffee(liters) {
  this.litersOfCoffee += liters;
}

export { fillWithLitersOfCoffee, serveACup };
