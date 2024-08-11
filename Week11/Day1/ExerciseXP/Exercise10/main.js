var greet = function (user) {
    if (typeof user === "string") {
        console.log("Hello, ".concat(user, ", it's a real pleasure to see you!"));
    }
    else {
        console.log("Hi, nice to meet you!");
    }
};
greet("Anna");
greet(227);
