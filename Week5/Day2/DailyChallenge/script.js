let solar_system = [
    { name: "Mercury", moon: 0, color: "darkorange" },
    { name: "Venus", moon: 0, color: "darkgrey" },
    { name: "Earth", moon: 1, color: "skyblue" },
    { name: "Mars", moon: 2, color: "darkred" }, 
    { name: "Jupiter", moon: 79, color: "brown" },
    { name: "Saturn", moon: 82, color: "darkyellow" },
    { name: "Uranus", moon: 27, color: "lightblue" },
    { name: "Neptune", moon: 14, color: "darkblue" },
];

let planets = document.getElementsByClassName("listPlanets")[0];

for (let i = 0; i < solar_system.length; i++ ) {
    let planet = document.createElement("div");
    planet.classList.add("planet");
    planet.innerText = solar_system[i].name;
    planet.style.backgroundColor = solar_system[i].color;
    planets.appendChild(planet);

    let moons = solar_system[i].moon;
    let left_side = 0;
    for (let j = 0; j < moons; j++) {
        let moon = document.createElement("div");
        moon.classList.add("moon");
        moon.style.left = left_side + "px";
        left_side += 15;
        planet.appendChild(moon);
    }    
};

let length = solar_system.length;

for (let i = 0; i < length; i++) {
};

for (let i = solar_system.length-1; i >= 0; i--) {
};