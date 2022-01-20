// Complete and add needed car properties:

const car = {
  distancesCum: 0,
  speed: 0,
  Distance: 0,
  start: function () {
    car.distancesCum = 0;
    car.speed = 0;
    car.Distance = 0;
    return this;
  },
  changeSpeed: function (newSpeed) {
    this.speed = newSpeed;
    console.log("changeSpeed", this.distancesCum);
    return this;
  },
  drive: function (Minutes) {
    this.Distance = (this.speed / 60) * Minutes;
    this.distancesCum = this.distancesCum + this.Distance;
    console.log("drive", this.distancesCum);
    return this;
  },
  showDistance: function () {
    console.log(this.distancesCum + " Km");
    return this;
  },
};

console.log(car.start().changeSpeed(130).drive(45).changeSpeed(50).drive(30).changeSpeed(90).drive(80).showDistance());
module.exports = car;
