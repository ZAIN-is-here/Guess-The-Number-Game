// Audios
let click = new Audio("assets/audios/click.mp3");
click.volume = 1;

let winSound = new Audio("assets/audios/success.mp3");
winSound.volume = 1;

// Variables (GLOBAL)
let maxnumber = 100;
let randomword = 0;
let att = 0;
let wins = 0;

// Get number function
function getnumberfunc() {
    maxnumber = Number(prompt("Type A Custom Number (min 100)"));

    if (isNaN(maxnumber) || maxnumber < 100) {
        alert("Number cannot be smaller than 100");
        return getnumberfunc();
    }

    // Generate random number AFTER setting maxnumber
    randomword = Math.floor(Math.random() * maxnumber) + 1;

    document.getElementById("myh3").textContent = `Number 1 - ${maxnumber}`;
}

// Reset wins
function resetwins() {
    wins = 0;
    SaveGame();
    document.getElementById("wins").textContent = `Wins: ${wins}`;

    click.currentTime = 0;
    click.play();
}

// Game Logic
function logic() {
    let playerinput = Number(document.getElementById("number").value);
    let result = document.getElementById("result");

    // Validation
    if (isNaN(playerinput) || playerinput < 1 || playerinput > maxnumber) {
        result.textContent = `Enter a valid number 1 - ${maxnumber}`;
        return;
    }

    if (playerinput < randomword) {
        result.textContent = `The number ${playerinput} is LOWER`;
        att++;
    } 
    else if (playerinput > randomword) {
        result.textContent = `The number ${playerinput} is HIGHER`;
        att++;
    } 
    else {
        result.textContent = `🎉 You won! Attempts: ${att}`;
        wins++;
        document.getElementById("wins").textContent = `Wins: ${wins}`;
        document.getElementById("reload").disabled = false;

        winSound.currentTime = 0;
        winSound.play();
    }

    SaveGame();

    click.currentTime = 0;
    click.play();
}

// Reload Game
function reload() {
    alert("Game Reloaded");

    att = 0;
    randomword = Math.floor(Math.random() * maxnumber) + 1;

    document.getElementById("result").textContent = "";
    document.getElementById("reload").disabled = true;

    click.currentTime = 0;
    click.play();
}

// Save Game
function SaveGame() {
    localStorage.setItem("wins", wins);
}

// Load Game
function LoadGame() {
    wins = parseInt(localStorage.getItem("wins")) || 0;
    document.getElementById("wins").textContent = `Wins: ${wins}`;
}

// Start Game
function start() {
    LoadGame();
    document.getElementById("reload").disabled = true;
}

// Start
getnumberfunc();
start();