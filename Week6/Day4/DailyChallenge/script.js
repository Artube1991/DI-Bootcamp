document.querySelector("form").addEventListener("submit", getdata);

function getdata(e) {
    e.preventDefault();
    const formData = new FormData(document.querySelector("form"));
    const entries = data.entries();
    for (entry of entries) {
        console.log(entry)
    }
}