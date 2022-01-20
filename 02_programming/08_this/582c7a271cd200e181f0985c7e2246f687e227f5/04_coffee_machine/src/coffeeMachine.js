const machine = {
  litersOfCoffee: 0,
  espressoSize: 0.08,
  longCoffeeSize: 0.15,
  expresso: function () {
    if (this.litersOfCoffee >= machine.espressoSize) {
      this.litersOfCoffee = this.litersOfCoffee - machine.espressoSize;
      return true;
    } else {
      this.litersOfCoffee = 0;
      return false;
    }
  },
  longCoffee: function () {
    if (this.litersOfCoffee >= machine.longCoffeeSize) {
      this.litersOfCoffee = this.litersOfCoffee - machine.longCoffeeSize;
      return true;
    } else {
      this.litersOfCoffee = 0;
      return false;
    }
  },
  fillWithLitersOfCoffee: function (rajout) {
    this.litersOfCoffee = this.litersOfCoffee + rajout;
  },
};

console.log(machine.expresso());
console.log(machine.expresso());
console.log(machine.expresso());
module.exports = machine;
