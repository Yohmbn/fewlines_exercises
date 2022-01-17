function doble(number) {
  return number * 2;
}

function double(numbers) {
  return numbers.map(doble);
}

// Do not remove the following line, it is for tests
module.exports = double;
