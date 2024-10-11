const head = document.getElementsByTagName("h1")[0];
console.log(head);

const last = document.getElementsByTagName("p")[3];
last.remove();

const headTwo = document.getElementsByTagName("h2")[0];
headTwo.addEventListener("click", () => {
    headTwo.setAttribute("style", "background-color: yellow")
});

const headThree = document.getElementsByTagName("h3")[0];
headThree.addEventListener("click", () => {
    headThree.setAttribute("style", "display: none");
})

const paragraphs = document.getElementsByTagName("p");
const button = document.getElementsByTagName("button")[0];
button.addEventListener("click", () => {
    for (p of paragraphs) {
        p.setAttribute("style", "font-weight: bold");
    };
});

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
};

head.addEventListener("mouseover", () => {
    let number = getRandomInt(0, 100);
    for (p of paragraphs) {
        p.setAttribute("style", `font-size: ${number}px`);
    };
})