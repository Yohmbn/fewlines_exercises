import request from "@fewlines-education/request";
import { getCategories } from "./getCategories";



function getChuckNorrisJoke(str : string): void {
  request(`https://api.chucknorris.io/jokes/random?category=${str}`, (error, html) => {
  if (error) {
    console.error(error);
  } else {
    const a = JSON.parse(html)
    console.log(a);
  }
});
}

// leave line below for tests to work properly
export { getChuckNorrisJoke };
