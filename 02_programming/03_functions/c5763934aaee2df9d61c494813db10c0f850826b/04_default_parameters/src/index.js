function helloSpartan(x = "soldier") {
  // Code the function here.
  if (x === "soldier") {
    console.log("Hello soldier; not very talkative uh?");
  }
  console.log ("Hello " + x + ": glad to know your name!");

}

// Do not remove last lines, it is for tests
module.exports = helloSpartan;
