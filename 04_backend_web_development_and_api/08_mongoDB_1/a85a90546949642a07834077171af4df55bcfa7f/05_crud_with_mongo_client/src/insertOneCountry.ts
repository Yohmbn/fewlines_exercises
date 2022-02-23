import { Db } from "mongodb";


type NewCountry = {
  name : string,
  capital: string,
  continent : string,
 }

export function insertOneCountry(db: Db,country : NewCountry) {

  return db
  .collection("worldAtlas")
  .insertOne(country)
  .then((result) => result.insertedId);
}
