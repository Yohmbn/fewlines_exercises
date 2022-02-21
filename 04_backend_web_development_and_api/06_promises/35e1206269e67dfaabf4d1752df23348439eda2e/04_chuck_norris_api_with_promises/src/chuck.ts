import fetch from "node-fetch";

function getCategories(): Promise<void> {
  return fetch("https://api.chucknorris.io/jokes/categories").then((response) => response.json());
}

function getJoke(category: string): Promise<string> {
  return fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
    .then((response) => response.json())
    .then((joke) => joke.value);
}

export { getCategories, getJoke };
