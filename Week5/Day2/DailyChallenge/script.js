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

    
}