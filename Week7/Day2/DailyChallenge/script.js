function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function toHTML(text) {
    document.getElementById("image").innerHTML = `<div><iframe src="https://giphy.com/embed/${text}" width="480" height="480" style="" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>`
}

function submitForm(e) {
    e.preventDefault();
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
        console.log(new_obj);
        let number = getRandomInt(1, 51);
        gif_id = new_obj["data"][number]["id"];
        toHTML(gif_id);
    })
    .catch((error) => {
        console.log(`We have the error: ${error}`)
        image.innerText = `We have the error: ${error}`
    });
}

const button = document.getElementById("button");
button.addEventListener("click", remove)

function remove() {
        image.innerHTML = "";
}
