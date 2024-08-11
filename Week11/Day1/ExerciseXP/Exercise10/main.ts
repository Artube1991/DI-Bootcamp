const greet = (user?: string) => {
    if (typeof user === "string") {
        console.log(`Hello, ${user}, it's a real pleasure to see you!`)
    }
    else {
        console.log("Hi, nice to meet you!")
        }
};

greet("Anna");
greet(227);