function ajSlice(x) {
  return "sliced " + x;
}

function slice(ingredients) {
  return ingredients.map(ajSlice);
}

function inSlice(x = "") {
  if (x.includes("sliced")) {
    return x.substring(6);
  }
}

function makeSandwich(ingredients) {
  if (ingredients.every(inSlice)) {
    return (
      "A tasty sandwich made of" +
      inSlice(ingredients[0]) +
      "," +
      inSlice(ingredients[1]) +
      "," +
      inSlice(ingredients[2]) +
      "," +
      inSlice(ingredients[3])
    );
  } else {
    return "I can't make a sandwich with non-sliced ingredients";
  }
}

// Do not remove the following line, it is for tests
module.exports = {
  slice,
  makeSandwich,
};
