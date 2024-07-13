document.querySelector("form").addEventListener("submit", getdata);

function getdata(e) {
    console.log(e.target.entries);
    e.preventDefault();
    const formData = new FormData(document.querySelector("form"));
    console.log("formData:", formData);
    const entries = formData.entries();
    const info = Object.fromEntries(entries);
    console.log("data:", info);
    const toString = JSON.stringify(info);
    console.log("toString:", toString);
    const new_p = document.createElement("p");
    new_p.innerText = toString;
    document.body.appendChild(new_p);
}