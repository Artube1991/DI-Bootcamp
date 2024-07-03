function hotelCost() {
    let input = prompt("How many nights do you plan to stay in hotel?", '');
    let isNumber = /^\d+$/.test(input);
    console.log(isNumber);
    
    while (isNumber == false) {
        input = prompt("How many nights do you plan to stay in hotel?", '');
        isNumber = /^\d+$/.test(input);
        console.log(isNumber);
     }

    let hotel_price = input * 140;
    console.log("$" + hotel_price);
    return hotel_price
}

function planeRideCost() {
    let input_place = prompt("What city do you live in?", '');
    let place_price = 0; 

    if (input_place == 'London') {
        place_price = 183;
    }
    else 
        if (input_place == 'Paris') {
            place_price = 220;
    }
    else {
        place_price = 300;
    }
    console.log("$" + place_price);
    return place_price
}

function rentalCarCost() {
    let input_car = prompt("How many days do you want to rent the car?", '');
    let isNumber_car = /^\d+$/.test(input_car);
    console.log(isNumber_car);
    
    while (isNumber_car == false) {
        input_car = prompt("How many days do you want to rent the car?", '');
        isNumber_car = /^\d+$/.test(input_car);
        console.log(isNumber_car);
     }

    if (input_car < 11) {
        car_price = input_car * 40;
    }
    else {
        car_price = input_car * 38
    }
    console.log("$" + car_price);
    return car_price
}

function totalVacationCost() {
    a = hotelCost()
    b = planeRideCost()
    c = rentalCarCost()

    let total_price = a + b + c
    console.log(total_price)
}

totalVacationCost()