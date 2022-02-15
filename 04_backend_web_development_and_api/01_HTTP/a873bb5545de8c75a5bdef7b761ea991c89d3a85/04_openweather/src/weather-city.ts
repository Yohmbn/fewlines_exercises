import request from "@fewlines-education/request";
import "dotenv/config";

const key = process.env.OPENWEATHER_API_KEY


function weatherByCity(city:string) : void {
  request(`api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`, (error, html) => {
    if (error) {
      console.error(error);
    } else {
      const a = JSON.parse(html)
      console.log(a);
    }
  });
}

// leave lines below for tests to work properly
export { weatherByCity }


