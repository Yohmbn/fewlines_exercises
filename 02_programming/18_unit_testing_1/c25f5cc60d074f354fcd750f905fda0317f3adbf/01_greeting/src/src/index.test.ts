import { greet } from "..";

test("teste greet par défaut", function() {
  const result = greet();

  expect(result).toBe("Hello WORLD!");
});

test("teste greet('Francis'), renvoie 'Hello FRANCIS!", function() {
  const result = greet("Francis");

  expect(result).toBe("Hello FRANCIS!");
});
