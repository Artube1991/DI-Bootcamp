"use strict";
function start(vehicle) {
    return `This is a ${vehicle.make}, model is ${vehicle.model}`;
}
class Sedan {
    constructor(make, model, numberOfDoors) {
        this.make = make;
        this.model = model;
        this.numberOfDoors = numberOfDoors;
    }
}
;
