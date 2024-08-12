interface Vehicle {
    make: string;
    model: string;
}

function start(vehicle: Vehicle): string {
        return `This is a ${vehicle.make}, model is ${vehicle.model}`
    }


interface Car extends Vehicle {
    make: string;
    model: string;
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
};

