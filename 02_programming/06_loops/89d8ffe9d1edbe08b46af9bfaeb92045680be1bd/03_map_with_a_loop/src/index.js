const numbers = [1, 2, 3, 4];

function double(number) {
  return number * 2;
}

function mapLoop(numbers, double) {
  let a = [];
  for (let i = 0; i < numbers.length; i++) {
    a.push(double(numbers[i]));
  }
  return a;
}

const doubledNumbers = mapLoop(numbers, double);

console.log(doubledNumbers);
// [2, 4, 6, 8]

// Do not remove the following lines, it is for tests
module.exports = mapLoop;
