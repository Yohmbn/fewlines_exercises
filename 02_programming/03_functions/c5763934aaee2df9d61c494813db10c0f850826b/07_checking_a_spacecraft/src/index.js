const stealthyFuelLevelCheck = (x) => {
  if (x > 20) {
    return "Fuel level: green";
  } else if (x > 10 && x <= 20) {
    return "Fuel level: yellow";
  } else {
    return "Fuel level: red";
  }
};

const stealthyCargoHoldCheck = (x) => {
  if (x.length === 4) {
    return "Full";
  } else if (x.length < 4) {
    return `Spaces available: ${4 - x.length}`;
  } else if (x.length > 4) {
    return `Over capacity by ${x.length - 4} items.`;
  }
};
// Do not remove last lines, it is for tests

module.exports = { stealthyFuelLevelCheck, stealthyCargoHoldCheck };
