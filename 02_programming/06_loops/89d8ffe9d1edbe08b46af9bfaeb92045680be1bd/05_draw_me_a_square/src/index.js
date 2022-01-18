function square(x) {
  let a = "*";
  for (let i = 0; i < x; i++) {
    let b = "";
    for (let i2 = 0; i2 < x; i2++) {
      b = b.concat(a);
    }
    console.log(b);
  }
}

console.log(square(2));
// Do not remove the following line, it is for tests
module.exports = square;
