function checkPassword() {
    const password = document.getElementById("password").value;
    const correctPassword = "I love you miu"; // Change this to your own password

    if (password === correctPassword) {
        document.getElementById("login").style.display = "none";
        document.getElementById("message").style.display = "block";
    } else {
        alert("Oopsies, try again sweetheart!");
    }
}
