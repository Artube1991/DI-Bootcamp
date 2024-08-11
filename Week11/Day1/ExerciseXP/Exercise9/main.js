function getAction(command) {
    switch (command) {
        case "run":
            console.log("I'm running the program.");
            break;
        case "quit":
            console.log("I'm quiting the program.");
            break;
        case "break":
            console.log("Let's take a 15 minutes break");
            break;
        default:
            console.log("I don't know this command command");
    }
}
;
getAction("run");
getAction("quit");
getAction("break");
getAction("sleep");
