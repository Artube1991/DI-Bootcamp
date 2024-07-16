function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}



async function characters() {
    let number_char = getRandomInt(1, 84);
    let info_container = document.getElementById("info");
    let name = document.createElement("h1");
    info_container.appendChild(name);
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
        throw new Error("Wrong Character")
    }
    name.textContent = properties.name;
    height.textContent = properties.height;
    gender.textContent = properties.gender;
    birth_year.textContent = properties.birth_year;
    homeworld.textContent = properties.homeworld;

}

characters()

function characters2() {
let number_char2 = getRandomInt(1, 84);
const response = fetch(`https://www.swapi.tech/api/people/${number_char2}`)
    .then((response) => {
    if (response.ok){
        return response.json()
    } else {
        throw new Error("character in not available")
    }
    })
    .then((new_obj) => {
        console.log(new_obj);
        // name.textContent = new_obj["result"]["properties"]["name"];


    })
    .catch((error) => {
        console.log(`We have the error: ${error}`)
    });
}

characters2()