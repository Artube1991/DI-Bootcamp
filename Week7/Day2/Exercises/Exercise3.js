async function starship() {
    let url = "https://www.swapi.tech/api/starships/9/";
    // let options = {
    //     method: "GET",
    //     headers: {
    //       "Content-type": "application:json",
    //     },
    // };
    
    const response = await fetch(url);
    if (response.ok) {
      response.json() 
    }
    else {
        throw new Error(`Oops! An error occurred: ${response.status}`)
    }
   console.log(response)
}

starship().catch((e) => {
    console.log(`We have a problem here: ${e}`)
})

starship()