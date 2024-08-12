"use strict";
class Sedan {
    constructor(make, model, numberOfDoors) {
        this.make = make;
        this.model = model;
        this.numberOfDoors = numberOfDoors;
    }
    start() {
        return `Hi, I'm ${this.make}, model ${this.model}, ${this.numberOfDoors} doors. I came from the future!`;
    }
}
;
let newCar = new Sedan("DeLorean", "DMC-12", 2);
console.log(newCar.start());
