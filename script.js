function checkPassword() {
    const password = document.getElementById("password").value;
    const correctPassword = "ourweddingsong"; 

    if (password === correctPassword) {
        document.getElementById("login").style.display = "none";
        document.getElementById("message").style.display = "block";
        var music = document.getElementById("Rachmaninoff - Piano Concerto 2 (Best Part)");
        music.play();
    } else {
        alert("Oopsies, try again sweetheart!");
    }
}

