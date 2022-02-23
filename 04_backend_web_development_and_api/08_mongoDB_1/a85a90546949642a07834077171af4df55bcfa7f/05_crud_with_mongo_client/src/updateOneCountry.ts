import { Db } from "mongodb";


export async function updateOneCountry(db: Db) {
  await db.collection("worldAtlas")
  .updateOne({name: "Australia"}, {$set: {capital: "Canberra"}})
  return db.collection("worldAtlas").findOne({name: "Australia"})
}
