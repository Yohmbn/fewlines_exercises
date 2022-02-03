import { toWords } from ".";



test("adds 1 + 2 to equal 3", function() {
  const result = toWords("High-tech product");

  expect(result).toEqual(["High", "tech", "product"]);
});
