// app.js
document.addEventListener("DOMContentLoaded", () => {
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");
    const backgroundMusic = document.getElementById("background-music");
    
    const sound1 = new Audio("sound1.mp3");
    const sound2 = new Audio("sound2.mp3");

    function flashBackground(color) {
        document.body.style.backgroundColor = color;
        setTimeout(() => {
            document.body.style.backgroundColor = "#f0f0f0";
        }, 300);
    }

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
