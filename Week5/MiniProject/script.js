const box = document.getElementsByClassName("box")
const boxcolor = document.getElementsByClassName("boxcolor")
const container = document.getElementsByClassName("container")
const button = document.getElementsByClassName("button")
console.log(container)
console.log(button)

for (let index = 0; index < 1500; index++) {
    const element = document.createElement("div")
    element.classList.add("box")
    container[0].appendChild(element)
}

let color;
let mouseClicked = false;
let new_color;


for (let index = 0; index < boxcolor.length; index++) {
    boxcolor[index].addEventListener("click", function get_color() {
        new_color = boxcolor[index].getAttribute("style");
        return new_color
    })
}

for (let index = 0; index < box.length; index++) {
    // box[index].setAttribute('style', "background-color: white");



    box[index].addEventListener("mousedown", function paint_it() {
        if (color = null) return
        mouseClicked = true
        color = new_color
    })

    box[index].addEventListener("mouseover", function paint_it_now() {
        if (!mouseClicked) return
        console.log('mouse is clicked')
        console.log(mouseClicked)
        console.log(color)
        box[index].setAttribute('style', color)
        })
    
    box[index].addEventListener("mouseup", function stop_it() {
        mouseClicked = false;
        console.log(mouseClicked)
    })

    button[0].addEventListener("click", function clean_It() {
        box[index].setAttribute('style', "background-color: skyblue")
    })
}

// button.addEventListener("click", clearIt)

// function clearIt() {
//     container.setAttribute('style', "background-color: skyblue")
// }

// for (let index = 0; index < box.length; index++) {
//     box[index].addEventListener("mousedown", function paint_it() {
//        box[index].style.backgroundColor = "red"
//     })
    
// }

// function makered() {
//     box[0].style.backgroundColor = "red"
// }
// box[0].addEventListener("click", makered)
