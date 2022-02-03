import { recipeMaker,CoffeeRecipe,expectedCoffeeRecipes } from "./index";


describe("#recipeMaker", () => {
  describe("#coffeeRecipes", () => {
    test("", () => {
      expect.assertions(1);
      expect(expectedCoffeeRecipes).toEqual(recipeMaker.coffeeRecipes);
    });
  });

  describe("#giveRecipe", () => {
    test("", () => {
      expect.assertions(2);
      expect(typeof recipeMaker.giveRecipe).toEqual("function");
      expect(recipeMaker.giveRecipe.length).toEqual(1);
    });

    test("it should return a string", () => {
      expect.assertions(2);
      expect(typeof recipeMaker.giveRecipe("cappuccino")).toEqual("string");
      expect(typeof recipeMaker.giveRecipe("cola")).toEqual("string");
    });

    test("test text sample", () => {
      expect.assertions(3);
      expect(recipeMaker.giveRecipe("LATTE")).toEqual("Sorry, LATTE does not exist on our list.");
      expect(recipeMaker.giveRecipe("latt")).toEqual("Sorry, latt does not exist on our list.");
      expect(recipeMaker.giveRecipe("cola")).toEqual("Sorry, cola does not exist on our list.");
    });

    test("dont forget to give a description LOL", () => {
      expect.assertions(5);
      recipeMaker.coffeeRecipes.forEach((coffee) => {
        const result = recipeMaker.giveRecipe(coffee.name);
        expect(result).toEqual(`${coffee.name} ingredients:\n- ${coffee.ingredients.join(",\n- ")}`);
      });
    });
  });
});
