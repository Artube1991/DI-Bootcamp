let user_arr = ["sky", "day", 224, "new", "carrot", "love", "fight"];

const makeAllCaps = (arr) => {
    return new Promise((resolve, reject) => {
    let tester_arr = [];
    let new_arr = [];
    for (item of arr) {
        if (typeof(item) === "string")
        tester_arr.push(item);
    }
    if (tester_arr.length == arr.length) {
        resolve(new_arr = tester_arr.map(n => n.toUpperCase()))
    }
    else reject("not all of elements are words")
});
}

console.log(user_arr);

makeAllCaps(user_arr)
  .then((result) => {
    console.log(result);
})
  .catch((e) => {
    console.log(`Impossible to execute the operation: ${e}`);
});

const sortWords = (arr) => {
    return new Promise((resolve, reject) => {
    let sorted_arr = []
        if (arr.length > 4) {
            resolve(sorted_arr = arr.sort())
        }
        else reject("the length of the array is too small")
    });
}

sortWords(user_arr)
    .then((result) => {
        console.log(result);
    })
    .catch((e) => {
        console.log(`Impossible to execute the operation: ${e}`);
    })

