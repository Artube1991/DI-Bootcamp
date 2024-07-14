Promise.resolve("3").then(
    function (value) {
        console.log(value);
    });

Promise.reject("Boo!").catch(
        function (value) {
            console.log(value);
        });