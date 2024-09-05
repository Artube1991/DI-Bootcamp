const solar_system = [
    { name: "Mercury", moon: 0, color: "orange" },
    { name: "Venus", moon: 0, color: "darkgrey" },
    { name: "Earth", moon: 1, color: "blue" },
    { name: "Mars", moon: 2, color: "darkred" }, 
    { name: "Jupiter", moon: 79, color: "brown" },
    { name: "Saturn", moon: 82, color: "darkyellow" },
    { name: "Uranus", moon: 27, color: "lightblue" },
    { name: "Neptune", moon: 14, color: "darkblue" },
];

const planets = document.getElementById("listPlanets");

for (let i = 0; i < solar_system.length; i++ ) {
    const planet = document.createElement("div");
    planet.classList.add("planets");
    planet.innetText - solar_system[i].name;
    planet.style.background = solar_system[i].color;
    planets.appendChild(planet);

    const moons = solar_system[i].moon;
    let left_side = 0;
    for (let j = 0; j < moons; j++) {
        const moon = document.createElement("div");
        moon.classList.add("moon");
        moon.style.left = left_side + "px";
        left_side += 15;
        planet.appendChild(moon);
    }    
};

const length = solar_system.length;
for (let i = 0; i < length; i++) {
};

for (let i = solar_system.length-1; i >= 0; i--) {
};