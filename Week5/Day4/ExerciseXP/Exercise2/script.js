const form = document.getElementsByTagName("form")[0];

console.log(form);

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fname = document.getElementById("fname");
    console.log(fname.value);
    const lname = document.getElementById("lname");
    console.log(lname.value);
    console.log(form.fname.value);
    console.log(form.lname.value);
})

