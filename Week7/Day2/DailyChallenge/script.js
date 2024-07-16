function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

let x = 0;

function toHTML(text) {
    let smth = `<div><iframe src="https://giphy.com/embed/${text}" width="480" height="480" style="" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>`;
    document.getElementById("image").innerHTML = smth.join("")
    // document.getElementById("image").innerHTML = `<div><iframe src="https://giphy.com/embed/${text}" width="480" height="480" style="" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>`
}

function submitForm(e) {
    e.preventDefault();
    x = x++;
    let user_input = e.target.name.value;
    console.log(user_input);
    let image = document.getElementById("image");
    // image.innerHTML = "";
    fetch(`https://api.giphy.com/v1/gifs/search?q=${user_input}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=100`)
    .then((response) => {
    if (response.ok){
        return response.json()
    } else {
        throw new Error("Wrong GIF")
    }
    })
    .then((new_obj) => {
        let number = getRandomInt(1, 51);
        gif_id = new_obj["data"][number]["id"];
        toHTML(gif_id);
    })
    .catch((error) => {
        console.log(`We have the error: ${error}`)
    });
}

console.log(x)

// const render = (arr) => {
//     const html = arr.map((item) => {
//       return `<div><iframe src="https://giphy.com/embed/${gif_id}" width="480" height="480" style="" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>`;
//     });
//     document.getElementById("root").innerHTML = html.join("");
//   };


// // let url = "https://api.giphy.com/v1/gifs/search?q=sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=10&offset=2"

// // let user_input = "love";


// function submitForm(e) {
//     e.preventDefault();
//     let input = e.target.search.value;
//     console.log(input);
// fetch(`https://api.giphy.com/v1/gifs/search?q=${user_input}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=100`)
// .then((response) => {
//     if (response.ok){
//         return response.json()
//     } else {
//         throw new Error("Wrong GIF")
//     }
//     })
//     .then((new_obj) => {
//         let number = getRandomInt(1, 51);
//         let gif_id = new_obj["data"][number]["id"];
//         image.innerHTML = `<iframe src="https://giphy.com/embed/${gif_id}" width="480" height="480" style="" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><br />`
//     })
//     .catch((error) => {
//         console.log(`We have the error: ${error}`)
//     });
// }