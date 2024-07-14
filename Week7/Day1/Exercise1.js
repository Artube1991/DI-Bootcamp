let num = 4;

const compareToTen = new Promise((resolve, reject) => {
if (num <= 10) {
    resolve("The ideal number");
}
else {
    reject("The invalid number");
}
});

compareToTen.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error)
});

console.log(num)