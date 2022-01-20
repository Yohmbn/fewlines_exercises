function shouldIMakeATicket(isStuck = false, timeBeingStuck = 20, hourOfTheDay = 15) {
  //   if (
  //     isStuck === true &&
  //     timeBeingStuck >= 20 &&
  //     ((13 >= hourOfTheDay && hourOfTheDay >= 9) || (18 >= hourOfTheDay && hourOfTheDay >= 14))
  //   ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  if (isStuck === true && timeBeingStuck >= 20) {
    if ((hourOfTheDay >= 9 && hourOfTheDay < 13) || (hourOfTheDay >= 14 && hourOfTheDay < 18)) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

console.log(shouldIMakeATicket());

// Don't touch this for tests to execute properly
module.exports = shouldIMakeATicket;
