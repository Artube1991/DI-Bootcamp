const robots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/1?200x200'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/2?200x200'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'https://robohash.org/3?200x200'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'https://robohash.org/4?200x200'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/5?200x200'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'https://robohash.org/6?200x200'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/7?200x200'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/8?200x200'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/9?200x200'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/10?200x200'
    }
    ];

console.log(robots)

// for (let index = 0; index < robots.length; index++) {
//     cards[index].appendChild(robotNames[index]);
// }

const container = document.getElementsByClassName("container")
const cards = document.getElementsByClassName("card")
const robotNames = document.getElementsByClassName("robotname")
const robotEmails = document.getElementsByClassName("robotemail")
const search = document.getElementById("search")

// search_request = ""
// console.log(search_request)


// const searchResult = robots.filter(function(robots) {
//     return robots.name.includes(search_request)
//     })
//     console.log(searchResult)



function get_cards(search_request) {
    const searchResult = robots.filter(function(robots) {
        return robots.name.toLocaleLowerCase().includes(search_request)
        })
        console.log(searchResult)
    for (let index = 0; index < searchResult.length; index++) {
    const element = document.createElement("div");
    element.classList.add("card");
    const element_4 = document.createElement("img");
    element_4.src = searchResult[index].image;
    element_4.alt = "That's our robots!";
    element_4.classList.add("robotimage");
    element.appendChild(element_4);
    const element_2 = document.createElement("p");
    element_2.classList.add("robotname");
    container[0].appendChild(element);
    element.appendChild(element_2);
    element_2.textContent = searchResult[index].name;
    const element_3 = document.createElement("p");
    element_3.classList.add("robotemail");
    element.appendChild(element_3);
    element_3.textContent = searchResult[index].email;
}
}

get_cards("")


search.addEventListener("keyup", showResults)

function showResults(event) {
    // container[0].remove();
    container[0].innerHTML = "";
    const value = event.target.value;
    console.log(value);
    get_cards(value.toLowerCase())
    }
    
