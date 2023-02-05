const signup = async (event) => {
    event.preventDefault();
    const username = document.querySelector("#signup-username").value.trim();
    const email = document.querySelector("#signup-email").value.trim();
    const password = document.querySelector("#signup-password").value.trim();

    if (username && email && password) {
        const response = await fetch("/api/users/signup", {
            method: "POST",
            body: JSON.stringify({ username, email, password }),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            await fetch("/api/users/login", {
                method: "POST",
                body: JSON.stringify({ username, password }),
                headers: { "Content-Type": "application/json" },
            }).then(() => document.location.replace("/"));
        } else {
            alert("Failed to sign up");
        }
    } else alert("No username or password!");
};

document.querySelector(".signup-form").addEventListener("submit", signup);
