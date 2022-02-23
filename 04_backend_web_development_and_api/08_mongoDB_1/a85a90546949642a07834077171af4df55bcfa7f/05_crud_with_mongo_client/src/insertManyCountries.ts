import { Db } from "mongodb";

type NewCountry = {
 name : string,
 capital: string,
 continent : string,
}


export function insertManyCountries(db: Db, newCountries : NewCountry[] ) {

    db.collection("worldAtlas")
    .insertMany(newCountries)

    return newCountries.length
  }


