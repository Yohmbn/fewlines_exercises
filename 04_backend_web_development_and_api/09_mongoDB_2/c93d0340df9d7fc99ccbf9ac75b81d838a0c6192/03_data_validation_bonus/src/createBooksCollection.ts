import * as mongo from "mongodb";

export const booksValidator = {
  // write your validator here
  validator: {
    $jsonSchema: {
      bsonType: "object",
      additionalProperties: false,
      required: ["_id", "title", "author", "description"],
      properties: {
        _id: {
          bsonType: "objectId",
          description: "must be an objectId and is required",
        },
        title: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        author: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        description: {
          bsonType: "string",
          maxLength: 100,
          description: "must be a string <100 chararacters and is required", },
      },
    },
  },
};

export function createBooksCollection(db: mongo.Db): Promise<mongo.Collection> {
  return db.createCollection("books", booksValidator);
}
