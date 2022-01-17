const MORSE_CODE = {
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
};
let decodedMessage = [];

const decodeMorse = (x, y = 0, z) => {
  if (typeof x === "string" && Number.isInteger(y)) {
    const x1 = x.split(" ");
    if (y < x1.length) {
      const x1 = x.split(" ");
      decodedMessage.push(MORSE_CODE[x1[y]]);
      return decodeMorse(x, y + 1, z);
    } else {
      return decodeMorse(x, y + 1, z);
    }
    return decodedMessage;
  } else {
    throw new TypeError("Put an array list");
  }
};

console.log(decodedMessage);

// Leave line below for tests to work properly
module.exports = decodeMorse;
