function consecutiveCount(a = "", b = "") {
  let c = 0;
  let d = 0;
  let streak = "";
  for (let i = 0; i < a.length; i++) {
    while (a[i] === b) {
      c = c + 1;
      i = i + 1;
    }
    if (c > d) {
      d = c;
      c = 0;
    } else {
      c = 0;
    }
  }

  return d;
}

console.log(consecutiveCount("utuutuuuuutuu", "u"));

// Do not remove the following line, it is for tests
module.exports = consecutiveCount;
