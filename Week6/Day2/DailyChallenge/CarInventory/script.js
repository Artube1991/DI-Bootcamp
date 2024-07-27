const inventory = [
    { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
    { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
    { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
    { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
    { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
  ];

function getCarHonda(carInventory) {
    let foundHonda = carInventory.find(item => item.car_make === "Honda");
    console.log(`This is a ${foundHonda.car_make} ${foundHonda.car_model} from ${foundHonda.car_year}`);
};


getCarHonda(inventory);

function sortCarInventoryByYear(carInventory) {
let sortedCars = carInventory.sort(function (x, y) {
    return x.car_year - y.car_year;
  });
console.log(sortedCars);
};

sortCarInventoryByYear(inventory);