let list = [];

function isE(x) {
  if (typeof x === "string") {
    if (x.includes("e") || x.includes("E")) {
      return x;
    }
  }
}

function theEFilter(sentences) {
  if (Array.isArray(sentences) && sentences.every((item) => typeof item === "string")) {
    const E_sentences = sentences.filter(isE);
    return E_sentences;
  }
}

// Do not remove the following line, it is for tests
module.exports = theEFilter;
