const box = document.getElementsByClassName("box")
// function makered() {
//     box[0].style.backgroundColor = "red"
// }
// box[0].addEventListener("click", makered)

for (let index = 0; index < box.length; index++) {
    box[index].addEventListener("click", function () {
       box[index].style.backgroundColor = "red"
    })
    
}

const container = document.getElementsByClassName("container")
console.log(container)

for (let index = 0; index < 1500; index++) {
    const element = document.createElement("div")
    element.classList.add("box")
    container[0].appendChild(element)
    
}