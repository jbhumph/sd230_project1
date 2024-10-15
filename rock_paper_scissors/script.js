// declare game variables
let player = "none"
let computer = "none"
let status = "none"
// declare document items
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const play = document.querySelector("#player");
const comp = document.querySelector("#computer");
const currentStatus = document.querySelector("#currentStatus");

rock.addEventListener("click", (e) => {
    playGame("rock")
})
paper.addEventListener("click", () => {
    playGame("paper");
})
scissors.addEventListener("click", () => {
    playGame("scissors");
})

function getRandom() {
    let number = Math.floor(Math.random() * 3)
    if (number === 0) {
        return "rock";
    } else if (number === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playGame(choice) {
    player = choice;
    computer = getRandom()

    if (player === computer) {
        status = "It's a draw"
    } else if (computer === "rock") {
        if (player === "paper") {
            status = "Player Wins"
        } else {
            status = "Computer Wins"
        }
    } else if (computer === "paper") {
        if (player === "scissors") {
            status = "Player Wins"
        } else {
            status = "Computer Wins"
        }
    } else if (computer === "scissors") {
        if (player === "rock") {
            status = "Player Wins"
        } else {
            status = "Computer Wins"
        }
    }
    play.innerHTML = `Player = ${player}`
    comp.innerHTML = `Computer = ${computer}`
    currentStatus.innerHTML = status;
}
