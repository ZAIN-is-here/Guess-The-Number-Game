// Audios
let click = new Audio("assets/audios/click.mp3");
click.volume = 1;
let win = new Audio("assets/audios/success.mp3");
win.volume = 1;
let fail = new Audio("assets/audios/failed.mp3");
fail.volume = 1;
//Variables
let att = 0;
let randomword = Math.floor(Math.random() * 100) + 1;
let wins = 0;

//Reset wins
function resetwins() {
    wins = 0;
    SaveGame();
    let showwins = document.getElementById("wins");
    showwins.textContent = `Wins: ${wins}`;
    click.currentTime = 0;
    click.play();
}

// Game Logic
function logic() {
    let playerinput = Number(document.getElementById("number").value);
    let result = document.getElementById("result");
    let showwins = document.getElementById("wins");

    if (isNaN(playerinput) || playerinput <= 0 || playerinput > 100) {
        result.textContent = "Enter a valid number 1 - 100";
        return;
    }


    if (playerinput < randomword) {
        result.textContent = `The Number ${playerinput} is Lower than the chosen number`
        att++;
    } else if (playerinput > randomword) {
        result.textContent = `The Number ${playerinput} is
        Higher than the chosen number`
        att++;
    } else if (playerinput === randomword) {
        result.textContent = `You won! You took ${att} attempts`;
        wins++;
        showwins.textContent = `Wins: ${wins}`;
        document.getElementById("reload").disabled = false;
    }
    SaveGame();
    click.currentTime = 0;
    click.play();
}

//Reload Function
function reload() {
    alert("Game Reloaded");
    let randomword = Math.floor(Math.random() * 100) + 1;
    let att = 0;
    
    click.currentTime = 0;
    click.play();
    document.getElementById("reload").disabled = true;
    result.textContent = "";
}

// Save Game
function SaveGame() {
    localStorage.setItem("wins", wins)
}

//Load Game
function LoadGame() {
    wins = parseInt(localStorage.getItem("wins")) || 0;

    document.getElementById("wins").textContent = `Wins: ${wins}`;
}

//Start Game function
function start() {
    LoadGame();
    document.getElementById("reload").disabled = true;
}

//Start
start();