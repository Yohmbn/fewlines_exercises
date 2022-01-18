function letterCount(a = "", b = "") {
  let c = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b) {
      c = c + 1;
    }
  }
  return c;
}

// Do not remove the following line, it is for tests
module.exports = letterCount;
