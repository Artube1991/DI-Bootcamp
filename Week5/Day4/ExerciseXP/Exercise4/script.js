function formula(radius) {
    let volume = (4/3) * Math.PI * Math.pow(radius, 3);
    return volume;
};

const myForm = document.getElementById("MyForm");

const radiusForm = document.getElementById("radius");

const volume = document.getElementById("volume");

myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let result = formula(radiusForm);
    volume.innerText = result;
});