function triangle(x) {
  let a = "*";
  let b = "";
  while (b.length < x) {
    b = b.concat(a);
    console.log(b);
  }
}

console.log(triangle(0));
// Do not remove the following line, it is for tests
module.exports = triangle;
