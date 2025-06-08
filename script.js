function checkPassword() {
    const password = document.getElementById("password").value;
    const correctPassword = "ourweddingsong"; // Change this to your own password

    if (password === correctPassword) {
        document.getElementById("login").style.display = "none";
        document.getElementById("message").style.display = "block";
    } else {
        alert("Oopsies, try again sweetheart!");
    }
}
