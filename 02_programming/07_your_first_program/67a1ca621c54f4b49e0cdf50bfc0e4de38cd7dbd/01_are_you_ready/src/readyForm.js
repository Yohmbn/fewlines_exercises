function readyForm(reader) {
  reader.question("Hello user!\nAre you ready for today??!\n", (reponse = "") => {
    console.log(`WOW, ${reponse}??!! Really Nice! Let's goo !!.`);

    reader.close();
  });
}

// Leave line below for tests to work
module.exports = readyForm;
