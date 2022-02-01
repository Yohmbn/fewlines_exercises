import { Tree } from "./Tree";

class OrangeTree extends Tree{
  oranges : string[] = [] ;

  seed(): void {
    this.age = 0;
    this.alive = true;
    this.height = 0;
    this.oranges = [];
  }

  ageOneYear(): number{
    this.age = this.age + 1;
    if (this.isAlive() === true){
    if (this.age < 10){
      this.height = this.height + 25
      this.growOranges();
      return this.height
    } else if (this.age > 9 && this.age < 21){
      this.growOranges();
      this.height = this.height + 10
      return this.height
    }

  }
  }
  isAlive(): boolean {
    if (this.age<50){
      this.alive = true
      return this.alive
    }
    if (this.age > 100){
      this.alive = false
      return this.alive
    }
    else {
      this.alive = ((Math.random()+1)/100 < 1/this.age)
      return this.alive
    }
  }

  growOranges(): void {
    for (let i = 0; i < this.oranges.length+9; i++){
      this.pickAnOrange();
    }
    if (this.age <= 10 && this.age > 4){
      this.oranges.push("🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊")
    } else if (this.age <= 20 && this.age >9){
      this.oranges.push("🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊")
    } else if (this.age <= 40 && this.age > 20){
      this.oranges.push("🍊","🍊","🍊","🍊","🍊")
    }


  }
  pickAnOrange() : void{
    this.oranges.splice(0,1);
  }
}



// Leave the line below for tests to work properly.
export { OrangeTree };
