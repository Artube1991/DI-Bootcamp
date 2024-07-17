async function starship() {
    let url = "https://www.swapi.tech/api/starships/9/";
    
    const response = await fetch(url);
    if (response.ok) {
      let data = await response.json();
      properties = data.result.properties;
      console.log(properties) 
    }
    else {
        throw new Error(`Oops! An error occurred: ${response.status}`)
    }
//    console.log(response)
}

starship().catch((e) => {
    console.log(`We have a problem here: ${e}`)
})

// starship()