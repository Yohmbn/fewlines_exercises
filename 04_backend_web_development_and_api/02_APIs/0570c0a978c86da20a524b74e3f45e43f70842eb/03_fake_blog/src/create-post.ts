import request from "@fewlines-education/request";
import "dotenv/config";



function createPost(titleName : string, authorName : string): void {

  const body =  {

    "title": titleName,
    "author": authorName
  } ;

request(
  `http://${process.env.HOST}/posts/`,
  {
    method: "post",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  },
  (error, body) => {
    const data = JSON.parse(body);
    console.log(data);
  }
);

}

export { createPost };
