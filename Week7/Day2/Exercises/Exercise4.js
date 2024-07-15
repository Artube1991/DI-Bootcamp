function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

// Analyse the code provided below - what will be the outcome?
// MY ANSWER:
// I think when we call function "asyncCall" the value of the variable
// "result" will appear only when the promise in the function "resolveAfter2Seconds"
// will be executed - that will happen after 2 seconds. So, first JS will console-log "calling", then will define the value of the
// variable in two minutes (beause of the method "await") and only after the ending of 
// evecution the await's function (in 2 seconds) it will continue to execute other command - in our case
// this is console-log the value of result ('resolved').