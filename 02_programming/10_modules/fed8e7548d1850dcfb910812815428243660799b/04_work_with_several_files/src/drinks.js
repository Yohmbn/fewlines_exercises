// There should be no import in this file. Only exports!

function longCoffee(x) {
  return this.serveACup(0.15);
}

function expresso(container) {
  return this.serveACup(0.08);
}

export { expresso, longCoffee };
