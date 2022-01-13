function oddEven(argument) {
  // Code the function here.
  if (Number.isInteger(argument)){
    if (argument % 2 === 0){
      return argument + " is an even number.";
    } else if (argument % 2 === 1) {
      return argument + " is an odd number.";
    }
  } else {
    console.log ( argument + " is not a number.");
  }

}

// Do not remove last lines, it is for tests
module.exports = oddEven;

//if (argument % 2 === 0){
// return argument + " is an even number.";
//}// else if (argument % 2 === 1) {
//return argument + " is an odd number.";
//} //else  if (typeof argument !== "number"){
//console.log(argument + " is not a number.");
//}
//}
