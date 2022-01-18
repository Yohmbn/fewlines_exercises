const numbers = [1, 2, 3, 4];

function log(number) {
  console.log(`- ${number}`);
}

function forEachLoop(numbers, log) {
  for (let i = 0; i < numbers.length; i++) {
    log(numbers[i]);
  }
}

// Do not remove the following lines, it is for tests
module.exports = forEachLoop;
