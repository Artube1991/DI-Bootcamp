const seeUIn4Seconds = new Promise((resolve) => {
    setTimeout(() => {resolve("success");  
    }, 4000);
});

seeUIn4Seconds.then((result) => {
    console.log(result)
});