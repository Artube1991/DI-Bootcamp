const array = ["day", "Maggie", "beautiful", "played", "Hogwarths"];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function newArr(arr) {
    let arrRandom = [];

    for (let i = arr.length - 1; i > -1; i--) {
        let numb = getRandomInt(0, arr.length);
        console.log(numb);
        console.log("the random word is", arr[numb]);

        arrRandom.push(arr[numb]);

        arr.splice(numb, 1);
        // console.log("the arr cut ==", arr);
        
        console.log(arrRandom);
        }
    };

newArr(array);