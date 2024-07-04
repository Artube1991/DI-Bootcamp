function changeEnough(itemPrice, arr) {
    if (itemPrice < (arr[0]*0.25 + arr[1]*0.10 + arr[2]*0.05 + arr[3]*0.01)) {
        return true
    }
    else {
        return false
    }
}

console.log(changeEnough(7, [40, 6, 8, 10]))