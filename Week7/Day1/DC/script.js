let user_arr = ["sky", "day", "new", "love", "fight"];

function makeAllCaps(arr) {
    return new Promise((resolve, reject) => {
    let tester_arr = [];
    let new_arr = [];
    for (item of arr) {
        if (typeof(item) === "string")
        tester_arr.push(item);
        return tester_arr;
    }
    if (tester_arr.length = arr.length) {
        resolve(new_arr = tester_arr.map(n => n.toUpperCase()))
    }
    else reject(
        console.log("not all of elements are words")
    )
});
}

makeAllCaps(user_arr).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(`Impossible to execute the operation: ${error}`)
});

console.log(user_arr);





// compareToTen.then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error)
// });

// console.log(num)