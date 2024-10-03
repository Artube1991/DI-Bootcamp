document.getElementById("register"),addEventListener("submit", async (e) => {
    e.preventDefault();

    const {username, password} = e.target;

    const data = {
        username: username.value,
        password: password.value,
    };

    try {
        const response = await fetch("http://localhost:5000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const msg = await response.json();

        document.getElementById("login_message").innerText = msg.message;
    } catch (error) {
        console.log(error);
    }
});