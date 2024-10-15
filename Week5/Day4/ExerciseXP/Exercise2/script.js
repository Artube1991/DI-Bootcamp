const body = document.getElementsByTagName("body")[0];
const form = document.getElementsByTagName("form")[0];
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const message = document.createElement("p");
const usersAnswer = document.getElementsByClassName("usersAnswer")[0];

body.appendChild(message);

console.log(form);

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    console.log(fname.value);
    console.log(lname.value);

    console.log(form.fname.value);
    console.log(form.lname.value);

    const list = document.createElement("li");
    const list2 = document.createElement("li");

    if (form.fname.value === "" || form.lname.value === "") {
        message.innerText = "You didn't fill last name or first name fields!";
    }
    else {
            usersAnswer.innerHTML = "";
            message.innerText = "";
            usersAnswer.appendChild(list);
            list.innerText = form.fname.value;
            usersAnswer.appendChild(list2);
            list2.innerText = form.lname.value;
    }
});



