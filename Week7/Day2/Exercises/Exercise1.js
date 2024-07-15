let url = "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"

fetch(url)
    .then((response) => {
    if (response.ok){
        return response.json()
    } else {
        throw new Error("Wrong GIF")
    }
    })
    .then((new_obj) => {
        console.log(new_obj);
    })
    .catch((error) => {
        console.log(`We have the error: ${error}`)
    });
