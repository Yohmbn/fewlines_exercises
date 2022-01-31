type continentType = string[]

const continents: continentType = ["Europe","NorthAmerica","SouthAmerica","Asia","Africa","Oceania"];

type citiesType = {
  [key: string]: string[];
}

const cities: citiesType = {
  Europe : ["France","Germany","Turkey"],
  NorthAmerica : ["USA","Canada"],
  SouthAmerica : ["Argentina","Brasil","Uruguay"],
  Asia : ["Japan","China","India","Sri Lanka"],
  Oceania : ["Australia"],
  Africa : ["Senegal","Cameroun","Algeria","Tunisia","Morocco"]
};

// Leave the line below for tests to work properly.
export { continents, cities };
