
import { getRandomUser } from ".";

describe("Testing with fixed values of random", () => {
  test("it should return at the first element of the array", () => {
    expect.assertions(1);
    const fakeRandom = jest.spyOn(Math, "random");
    fakeRandom.mockImplementation(() => 0);
    const fakeGeneratedUser = getRandomUser(["Marie","Jean","Pierre"]);
    expect(fakeGeneratedUser).toBe("Marie");
    fakeRandom.mockRestore();
  });

  test("it should return the last element of the array", () => {
    expect.assertions(1);
    const fakeRandom = jest.spyOn(Math, "random");
    fakeRandom.mockImplementation(() => 1);
    const fakeGeneratedUser = getRandomUser(["Marie","Jean","Pierre","Zod"]);
    expect(fakeGeneratedUser).toBe("Zod");
    fakeRandom.mockRestore();
  });
});
