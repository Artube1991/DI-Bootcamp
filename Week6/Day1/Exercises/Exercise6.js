(function (kids, partner, place, job) {
    const sentence = ("You will be a " + job + " in " + place + ", and married to " + partner + " with " + kids + " kids.")
    let new_div = document.createElement("div");
    new_div.innerText = sentence;
    document.body.appendChild(new_div)
})("three", "Anna", "Haifa", "developer");