var checking = function (num) {
    if (num == 0) {
        console.log("Your number is zero");
    }
    if (num < 0) {
        console.log("".concat(num, " is a negative number"));
    }
    else if (num > 0) {
        console.log("".concat(num, " is a positive number"));
    }
};
checking(-7);
checking(0);
checking(0.33);
