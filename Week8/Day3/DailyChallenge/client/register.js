document.getElementById("register"),addEventListener("submit", async (e) => {
    e.preventDefault();

    const {first_name, last_name, email, username, password} = e.target;

    const data = {
        first_name: first_name.value,
        last_name: last_name.value,
        email: email.value,
        username: username.value,
        password: password.value,
    };

    try {
        const response = await fetch("http://localhost:5000/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const msg = await response.json();

        document.getElementById("register_message").innerText = msg.message;
    } catch (error) {
        console.log(error);
    }
});