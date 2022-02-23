import "dotenv/config";

const newCountries = [
  {
    name: "United Kingdom",
    capital: "London",
    continent: "Europe",
  },
  {
    name: "Greece",
    capital: "Athens",
    continent: "Europe",
  },
  {
    name: "Bulgaria",
    capital: "Sofia",
    continent: "Europe",
  },
];

db.worldAtlas.insertMany(newCountries);
