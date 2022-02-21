import request from "@fewlines-education/request";
import "dotenv/config";

function updatePostTitle(id : number, titleName : string): void {
  const body =  {
    "title": titleName,
  } ;

request(
  `http://${process.env.HOST}/posts/${id}`,
  {
    method: "put",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  },
  (error, body) => {
    const data = JSON.parse(body);
    console.log(data);
  }
);


}

function updatePostAuthor(id : number , authorName: string):void {
  const body =  {
    "author": authorName,
  } ;

request(
  `http://${process.env.HOST}/posts/${id}`,
  {
    method: "put",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  },
  (error, body) => {
    const data = JSON.parse(body);
    console.log(data);
  }
);
}

function updatePost(id : number, authorName : string, titleName : string):void {
  const body =  {

    "title": titleName,
    "author": authorName
  } ;

request(
  `http://${process.env.HOST}/posts/${id}`,
  {
    method: "put",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  },
  (error, body) => {
    const data = JSON.parse(body);
    console.log(data);
  }
);

}

export { updatePost, updatePostAuthor, updatePostTitle };
