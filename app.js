// app.js
document.addEventListener("DOMContentLoaded", () => {
    const playMusicButton = document.getElementById("play-music");
    const backgroundMusic = document.getElementById("background-music");
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");

    const sound1 = new Audio("hey.m4a");
    const sound2 = new Audio("ho.m4a");

    function flashBackground(color) {
        document.body.style.backgroundColor = color;
        setTimeout(() => {
            document.body.style.backgroundColor = "#f0f0f0";
        }, 300);
    }

    playMusicButton.addEventListener("click", () => {
        backgroundMusic.play();
        playMusicButton.style.display = "none"; // Hide the button after playing
    });

    button1.addEventListener("click", () => {
        sound1.play();
        flashBackground("lightblue");
    });

    button2.addEventListener("click", () => {
        sound2.play();
        flashBackground("lightcoral");
    });

    backgroundMusic.volume = 0.5; // Adjust volume if needed
});
