import { Interface } from "readline";
import { cities, continents } from "./data/data";
import { sanitizeUserInput } from "./utils/format";

console.log("***Welcome to HOLIDAY LOCATION FINDER***\n\nThis program will help you find a location based on the continent you will input.\n\nHere is the list of continent to chose from:\n- Europe\n- North America\n- South America\n- Asia\n- Africa\n- Oceania\n")

function holidayLocationFinder(reader: Interface): void {
  reader.question("Please input your choice:\n> ",(choice) => {
      const Newchoice = sanitizeUserInput(choice)
      if (Object.keys(cities).includes(Newchoice) ){
        const randomNumber : number = Math.floor(Math.random() * cities[Newchoice].length)
        console.log(`You chose ${Newchoice}. I think you really should go spend some time in ${cities[Newchoice][randomNumber]} `)
        holidayLocationFinder(reader);
      }
      else{
        console.log("This continent is not included,try again")
        holidayLocationFinder(reader)
      }


      })
  }


// Leave the line below for tests to work properly.
export { holidayLocationFinder };
