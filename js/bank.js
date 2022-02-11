document.getElementById('login-submit').addEventListener('click', function () {
    // get email
    const emailField = document.getElementById("user-email");
    const userEmail = emailField.value;
    // get password
    const passwordField = document.getElementById("user-password");
    const userPassword = passwordField.value;
    if (userEmail == "badsha@gmail.com" && userPassword == "F21030207") {
        window.location.href = 'banking.html';
    }
})

