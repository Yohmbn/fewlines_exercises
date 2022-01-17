const Painting = (currentValue) => currentValue["type"] === "painting";

function canTakeArtPieces(pieces) {
  return Object.values(pieces).every(Painting);
}

// Do not remove the following line, it is for tests
module.exports = canTakeArtPieces;
