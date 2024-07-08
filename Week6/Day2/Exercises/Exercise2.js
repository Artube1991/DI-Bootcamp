const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

colors.forEach((elem, index) => index === 0
    ? console.log(index+1 + ordinal[1] + " choice is " + elem)
    : index === 1
    ? console.log(index+1 + ordinal[2] + " choice is " + elem)
    : index === 2
    ? console.log(index+1 + ordinal[3] + " choice is " + elem)
    : console.log(index+1 + ordinal[0] + " choice is " + elem)
)