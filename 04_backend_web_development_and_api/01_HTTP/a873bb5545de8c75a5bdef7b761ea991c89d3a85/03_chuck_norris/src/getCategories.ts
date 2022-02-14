import request from "@fewlines-education/request";

function getCategories(): void {
  request("https://api.chucknorris.io/jokes/categories", (error, html) => {
  if (error) {
    console.error(error);
  } else {
    console.log(html);
  }
});
}

// leave line below for tests to work properly
export { getCategories };
