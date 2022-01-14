// A function getInput that takes two parameters, an input (the first one) and a callback function
const getInput = ({ user, key }, func) => {
  return func(key);
};
// Leave the line below for tests to work
module.exports = getInput;
