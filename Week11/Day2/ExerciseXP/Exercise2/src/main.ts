
interface Vehicle {
    make: string;
    model: string;
    start(): string;
}




interface Car extends Vehicle {
    // make: string;
    // model: string;
    numberOfDoors: number;

//     constructor(make: string, model: string, numberOfDoors: number) {
//         this.make = make;
//         this.model = model;
//         this.numberOfDoors = numberOfDoors;
// }
}

class Sedan implements Car {
    make: string;
    model: string;
    numberOfDoors: number;

    constructor(make: string, model: string, numberOfDoors: number) {
        this.make = make;
        this.model = model;
        this.numberOfDoors = numberOfDoors;
    }
    start(): string {
        return `Hi, I'm ${this.make}, model ${this.model}, ${this.numberOfDoors} doors. I came from the future!`
    }
};

let newCar = new Sedan("DeLorean", "DMC-12", 2)
console.log(newCar.start());