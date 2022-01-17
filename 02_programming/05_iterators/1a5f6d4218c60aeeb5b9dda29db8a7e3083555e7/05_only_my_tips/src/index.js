function Me(x) {
  if (x["waiter"] === "Yourself") {
    return x["tip"];
  }
}

function onlyMyTips(invoices) {
  if (Array.isArray(invoices)) {
    let a = invoices.filter(Me);
    return a.map((y) => y["tip"]);
  }
}

const todaysInvoices = [
  { clients: 3, waiter: "Yourself", price: 5100, tip: 200 },
  { clients: 2, waiter: "Dominique", price: 2200, tip: 50 },
  { clients: 2, waiter: "Yourself", price: 2900, tip: 100 },
];

console.log(onlyMyTips(todaysInvoices));

// Do not remove the following line, it is for tests
module.exports = onlyMyTips;
