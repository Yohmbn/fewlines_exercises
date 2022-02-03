
 export type CoffeeRecipe = {
  name: string;
  ingredients: string[];
};

export const expectedCoffeeRecipes: CoffeeRecipe[] = [
  {
    name: "espresso",
    ingredients: ["espresso"],
  },
  {
    name: "macchiato",
    ingredients: ["espresso", "milk foam"],
  },
  {
    name: "latte",
    ingredients: ["espresso", "milk foam", "steamed milk"],
  },
  {
    name: "cappuccino",
    ingredients: ["espresso", "milk foam", "steamed milk", "chocolate"],
  },
  {
    name: "americano",
    ingredients: ["espresso", "water"],
  },
];





export const recipeMaker = {
 coffeeRecipes : expectedCoffeeRecipes,
  giveRecipe(coffeeName : string): string {
    const result = expectedCoffeeRecipes.filter(obj => {return obj.name === coffeeName});
    if (result.length === 0){
      return `Sorry, ${coffeeName} does not exist on our list.`
    } else {
    return `${result[0].name} ingredients:\n- ${result[0].ingredients.join(",\n- ")}`

    }
  }
}
