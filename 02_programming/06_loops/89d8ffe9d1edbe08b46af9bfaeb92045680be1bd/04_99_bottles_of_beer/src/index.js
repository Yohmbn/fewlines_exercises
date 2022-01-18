function sing() {
  let b = [];
  for (let i = 99; i > 2; i = i - 1) {
    let string = `${i} bottles of beer on the wall, ${i} bottles of beer.`;
    b.push(string);
    let string2 = `Take one down and pass it around, ${i - 1} bottles of beer on the wall.`;
    b.push(string2);
  }
  for (let i = 2; i > 1; i = i - 1) {
    let string = `${i} bottles of beer on the wall, ${i} bottles of beer.`;
    b.push(string);
    let string2 = `Take one down and pass it around, ${i - 1} bottle of beer on the wall.`;
    b.push(string2);
  }
  for (let i = 1; i > 0; i = i - 1) {
    let string = `${i} bottle of beer on the wall, ${i} bottle of beer.`;
    b.push(string);
    let string2 = "Take one down and pass it around, no more bottles of beer on the wall.";
    b.push(string2);
  }
  let string = "No more bottles of beer on the wall, no more bottles of beer.";
  b.push(string);
  let string2 = "Go to the store and buy some more, 99 bottles of beer on the wall.";
  b.push(string2);
  return b;
}

console.log(sing());
// Do not remove the following line, it is for tests
module.exports = sing;
