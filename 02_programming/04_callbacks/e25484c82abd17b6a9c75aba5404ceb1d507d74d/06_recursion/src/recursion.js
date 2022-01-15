const findPosition = (x, y, z) => {
  if (Array.isArray(x) && x.every((item) => typeof item === "string") && typeof y === "string" && Number.isInteger(z)) {
    if (z <= x.length) {
      if (x[z] === y) {
        let z1 = z + 1;
        return y + " is at position #" + z1 + " in this array.";
      } else {
        return findPosition(x, y, z + 1);
      }
    } else {
      return y + " is not present in this array.";
    }
  } else {
    throw new TypeError("Put an array list, a string and an integer as parameters");
  }
};

console.log(findPosition(["Alpha", "Delta", "Gamma"], "Gamma", 1));

// Leave line below for tests to work properly
module.exports = findPosition;
