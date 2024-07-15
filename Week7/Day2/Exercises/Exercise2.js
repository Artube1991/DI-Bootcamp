let url = "https://api.giphy.com/v1/gifs/search?q=sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=10&offset=2"

// let options = {
//     method: "GET",
//     headers: {
//         "q": "sun",
//         "rating": "g",
//         "api_key": "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My",
//         "limit": "10",
//         "offset": "2",
//     }
// }

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
