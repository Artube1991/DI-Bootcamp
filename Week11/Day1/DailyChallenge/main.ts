const processInput = (input: number | string | boolean) => {
    if (typeof input === "number") {
        console.log(Math.pow(input, 2));
    }
    else if (typeof input === "string") {
        console.log(input.toUpperCase());
        }
    else if (typeof input === "boolean") {
        console.log(!input)
    }
};

processInput(17);
processInput("mother washed the frame");
processInput(false);