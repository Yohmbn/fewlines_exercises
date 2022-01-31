import readline from "readline";
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function start() {
  console.log("Welcome\n********************************************************");
}

function Accueil() {
  start();
  console.log("1 - Add new customer\n2 - Access customer data\n3 - Quit\n\n");
  reader.question("🤖 Choose an action\n>", (choice) => {
    if (choice === "1" || choice === "2" || choice === "3") {
      switch (choice) {
        case "1":
          NewCustomer();
          break;
        case "2":
          Access();
          break;
        case "3":
          Quit();
          break;
      }
    } else {
      console.log("Please choose 1,2 or 3");
      Accueil();
    }
  });
}

let listCustomers = [];

function NewCustomer() {
  console.log(listCustomers);
  const customer = {
    firstname: "John",
    lastname: "Doe",
    fullname() {
      return `${this.firstname} ${this.lastname}`;
    },
    mail: "jon.doe@fake.local",
    birthdate: "22/07/1996",
    city: "Somewhere",
    country: "Else",
  };
  console.log(
    "********************************************************\nCREATE NEW CUSTOMER\n********************************************************",
  );

  reader.question("🤖 - first name:>\n>", (firstname) => {
    customer.firstname = firstname;
    reader.question("🤖 - last name:>\n>", (lastname) => {
      customer.lastname = lastname;
      reader.question("🤖 - email:>\n>", (mail) => {
        customer.mail = mail;
        reader.question("🤖 - birth date:>\n>", (birthdate) => {
          customer.birthdate = birthdate;
          reader.question("🤖 - city:>\n>", (city) => {
            customer.city = city;
            reader.question("🤖 - country:>\n>", (country) => {
              customer.country = country;
              listCustomers.push(customer);
              console.log("The new customer has been added ");
              Accueil();
            });
          });
        });
      });
    });
  });
}

function Access() {}

function Quit() {}

export default { start, Accueil, listCustomers, NewCustomer, Access, Quit };
