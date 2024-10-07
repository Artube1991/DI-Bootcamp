const array = ["day", "Maggie", "beautiful", "played", "Hogwarths"];



let form = document.getElementById("libform");

console.log(form.noun.value);

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function newArr() {
    let arrayDefault = [];
    let arrRandom = [];

    for (let item of form) {
        arrayDefault.push(item.value);
    };

    arrayDefault.pop();

    console.log(arrayDefault);

    let noun;
    let adjective;
    let person;
    let verb;
    let place;

    let words = [noun, adjective, person, verb, place];

    for (let i = arrayDefault.length - 1; i > -1; i--) {
        let numb = getRandomInt(0, arrayDefault.length);
        console.log(numb);
        console.log("the random word is", arrayDefault[numb]);

        arrRandom.push(arrayDefault[numb]);
        words[i] = arrayDefault[numb];


        arrayDefault.splice(numb, 1);
        // console.log("the arr cut ==", arr);
        
        console.log(arrRandom);

        };

        console.log(noun);
        
        // let noun = arrRandom[0];
        // let adjective = arrRandom[1];
        // let person = arrRandom[2];
        // let verb = arrRandom[3];
        // let place = arrRandom[4];

        const story = [`That `]

        console.log(noun);
        console.log(story);


    // for (let i = arr.length - 1; i > -1; i--) {
    //     let numb = getRandomInt(0, arr.length);
    //     console.log(numb);
    //     console.log("the random word is", arr[numb]);

    //     arrRandom.push(arr[numb]);

    //     arr.splice(numb, 1);
    //     // console.log("the arr cut ==", arr);
        
    //     console.log(arrRandom);
    //     }
    };

newArr();