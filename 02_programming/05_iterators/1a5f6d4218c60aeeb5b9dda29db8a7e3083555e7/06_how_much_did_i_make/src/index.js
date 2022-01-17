function Me(x) {
  if (x["waiter"] === "Yourself") {
    return x["tip"];
  }
}

function sum(a, b) {
  return a + b;
}

function howMuchDidIMake(invoices) {
  if (Array.isArray(invoices)) {
    let a = invoices.filter(Me);
    let b = a.map((y) => y["tip"]);
    return b.reduce(sum, 0);
  }
}

const invoices = [
  { clients: 3, waiter: "Yourself", price: 5100, tip: 200 },
  { clients: 2, waiter: "Dominique", price: 2200, tip: 50 },
  { clients: 2, waiter: "Yourself", price: 2900, tip: 100 },
];

// Do not remove the following line, it is for tests
module.exports = howMuchDidIMake;
