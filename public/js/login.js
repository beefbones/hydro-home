const loginFormHandler = async (event) => {
    event.preventDefault();

    const loginId = document.querySelector("#login-id").value.trim();
    const password = document.querySelector("#login-password").value.trim();

    if (loginId && password) {
        const response = await fetch("/api/users/login", {
            method: "POST",
            body: JSON.stringify({ email: loginId, username: loginId, password }),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            document.location.replace("/");
        } else {
            alert("Failed to log in");
        }
    }
};

document.querySelector(".login-form").addEventListener("submit", loginFormHandler);
