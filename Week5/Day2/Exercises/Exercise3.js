function changeEnough(itemPrice, [a, b, c, d]) {
    if (itemPrice < (a*0.25 + b*0.10 + c*0.05 + d*0.01)) {
        return true
    }
    else {
        return false
    }
}

console.log(changeEnough(7, [40, 6, 8, 10]))