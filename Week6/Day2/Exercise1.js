const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

colors.forEach((elem, index) => {
    console.log(`#${index} choice is ${elem}`)
})

function contains(arr, elem) {
    let isViolet;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === elem) {
            isViolet = true;
        }
        isViolet = false;
    }
    if (isViolet = true) {
        console.log("Yeah")
    } 
    else {
        console.log("No...")
    }

}
contains(colors, "Violet")