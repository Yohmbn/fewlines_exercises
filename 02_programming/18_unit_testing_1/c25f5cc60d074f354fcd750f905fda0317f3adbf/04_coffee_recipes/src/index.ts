import { coffeeRecipes } from "./index.test"


export function giveRecipe(coffeeName : string): string {
  const result = coffeeRecipes.filter(obj => {return obj.name === coffeeName});
  if (result.length === 0){
    return `Sorry, ${coffeeName} does not exist on our list.`
  } else {
  return `${result[0].name} ingredients:\n- ${result[0].ingredients.join(",\n- ")}`

  }
}
