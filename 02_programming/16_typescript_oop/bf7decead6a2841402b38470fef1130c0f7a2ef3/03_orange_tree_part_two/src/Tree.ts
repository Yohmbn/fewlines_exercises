class Tree {
  age: number = 0;
  height: number = 335;
  alive : boolean = true;


  constructor( age : number) {
    this.age = age;
    if (age < 10){
      this.height = age * 25
    } else if (age > 9 && age < 21){
      this.height = 225 + (age - 9)*10
    }

  }
  seed(): void  {
    this.age = 0;
    this.alive = true;
    this.height = 0;
  }
}

// Leave the line below for tests to work properly.
export { Tree };
