// Audio
let clickSound = new Audio("assets/audios/click.mp3");
clickSound.volume = 1;

// Select all buttons
let buttons = document.querySelectorAll(".btns");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        let link = button.getAttribute("data-link");

        // Play sound
        clickSound.currentTime = 0;
        clickSound.play();
        
        setTimeout(() => {
            window.location.href = link;
        }, 200);
    });
});