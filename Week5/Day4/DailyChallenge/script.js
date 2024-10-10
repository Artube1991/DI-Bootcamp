let funStory = document.getElementById("story");

let form = document.getElementById("libform");

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
};

form.addEventListener("submit", (e) => {
    e.preventDefault();

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
        console.log("the arr cut ==", arrayDefault);
        
        console.log(arrRandom);
        };

        let story = `That was a really crazy story!!! It happenned one beautiful ${words[0]} when a human (or alien) called ${words[2]} stayed on the hill and started to ${words[3]}. 
        A few moments ago a friend of ${words[2]} appeared. He/She was soooo ${words[1]}. After the little conversation they arrived to the wonderful country called ${words[4]}. The end.`;


        for (let i of words) {
            if (i === '') {
                funStory.innerText = "You didn't fill all the fields in the form! Please try once again";
            }
            else {
                funStory.innerText = story;
            }
        };

        console.log(story);

    });