const checking = (num: number) => {
    if (num == 0) {
        console.log("Your number is zero")
    }
    if (num < 0) {
        console.log(`${num} is a negative number`)
    }
    else if (num > 0) {
        console.log(`${num} is a positive number`)
    }
};

checking(-7)
checking(0)
checking(0.33)