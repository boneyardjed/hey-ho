// app.js
document.addEventListener("DOMContentLoaded", () => {
    const playMusicButton = document.getElementById("play-music");
    const backgroundMusic = document.getElementById("background-music");
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");
    const premiumButton = document.getElementById("premium-section");
    const premiumButtonsDiv = document.getElementById("premium-buttons");
    
    const sound1 = new Audio("sound1.mp3");
    const sound2 = new Audio("sound2.mp3");
    const sound3 = new Audio("stomp.mp3");
    const sound4 = new Audio("holler.mp3");

    function flashBackground(color) {
        document.body.style.backgroundColor = color;
        setTimeout(() => {
            document.body.style.backgroundColor = getComputedStyle(document.body).backgroundColor;
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

    premiumButton.addEventListener("click", () => {
        // Toggle dark mode
        document.body.classList.toggle("dark-mode");
        premiumButtonsDiv.style.display = premiumButtonsDiv.style.display === "none" ? "block" : "none";
    });

    // Event listeners for the new sound buttons
    document.getElementById("button3").addEventListener("click", () => {
        sound3.play();
        flashBackground("lightgreen");
    });

    document.getElementById("button4").addEventListener("click", () => {
        sound4.play();
        flashBackground("lightyellow");
    });

    backgroundMusic.volume = 0.5; // Adjust volume if needed
});
