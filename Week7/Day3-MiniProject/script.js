function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

const button = document.getElementById("button");
button.addEventListener("click", characters)

async function characters() {
    let number_char = getRandomInt(1, 84);
    let info_container = document.getElementById("info");
    info_container.innerHTML = "";
    let name = document.createElement("h1");
    info_container.appendChild(name);
    name.innerHTML = '<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i> <p>Loading...</p>';
    let height = document.createElement("p");
    info_container.appendChild(height);
    let gender = document.createElement("p");
    info_container.appendChild(gender);
    let birth_year = document.createElement("p");
    info_container.appendChild(birth_year);
    let homeworld = document.createElement("p");
    info_container.appendChild(homeworld);
    const response = await fetch(`https://www.swapi.tech/api/people/${number_char}`)
    let properties;
    if (response.ok) {
        let data = await response.json();
        properties = data.result.properties
        console.log(properties)
    } else {
        throw new Error(name.textContent = "Oh no! This character isn't available!")
    }
    name.textContent = properties.name;
    height.textContent = "Height: " + properties.height;
    gender.textContent = "Gender: " + properties.gender;
    birth_year.textContent = "Birth Year: "+ properties.birth_year;

    let name_planet;
    const home = await fetch(properties.homeworld)
    if (home.ok) {
        let data_planet = await home.json();
        name_planet = data_planet.result.properties.name;
        console.log(name_planet);
    }
    else {
        throw new Error(homeworld.textContent = "The planet isn't available")
    }

    homeworld.textContent = "Homeworld: " + name_planet;
}


// function characters2() {
// let number_char2 = getRandomInt(1, 84);
// const response = fetch(`https://www.swapi.tech/api/people/${number_char2}`)
//     .then((response) => {
//     if (response.ok){
//         return response.json()
//     } else {
//         throw new Error("character in not available")
//     }
//     })
//     .then((new_obj) => {
//         console.log(new_obj);
//         name.textContent = new_obj["result"]["properties"]["name"];


//     })
//     .catch((error) => {
//         console.log(`We have the error: ${error}`)
//     });
// }

// characters2()