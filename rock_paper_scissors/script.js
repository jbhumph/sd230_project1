// declare game variables
let player = "none"
let computer = "none"
let status = "none"
// declare document items
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const new_game = document.querySelector("#new_game");
const play = document.querySelector("#play_button");
const pA = document.querySelector("#pA");
const pB = document.querySelector("#pB");
const pAScore = document.querySelector("#pAScore");
const pBScore = document.querySelector("#pBScore");
const currentStatus = document.querySelector("#currentStatus");

let selection = "none";
let comp_sel = "tbd";
let ng = false;
let ready = false;

let score_p = 0;
let score_c = 0;

rock.addEventListener("click", () => {
    if (ng === false) {
        if (selection !== "rock") {
            selection = "rock"
            rock.classList.add("selected")
            paper.classList.remove("selected");
            scissors.classList.remove("selected");
            ready = true;
            update();
        } else {
            selection = "none";
            rock.classList.remove("selected");
            ready = false
            update();
        }
    }

})
paper.addEventListener("click", () => {
    if (ng === false) {
        if (selection !== "paper") {
            selection = "paper"
            paper.classList.add("selected")
            rock.classList.remove("selected");
            scissors.classList.remove("selected");
            ready = true;
            update();
        } else {
            selection = "none";
            paper.classList.remove("selected");
            ready = false
            update();
        }
    }
})
scissors.addEventListener("click", () => {
    if (ng === false) {
        if (selection !== "scissors") {
            selection = "scissors"
            scissors.classList.add("selected")
            rock.classList.remove("selected");
            paper.classList.remove("selected");
            ready = true;
            update();
        } else {
            selection = "none";
            scissors.classList.remove("selected");
            ready = false
            update();
        }
    }
})

play.addEventListener("click", () => {
    if (ready === true) {
        playGame(selection);
    }
})

new_game.addEventListener("click", () => {
    if (ng === true) {
        ng = false;
        selection = "none";
        rock.classList.remove("selected")
        paper.classList.remove("selected");
        scissors.classList.remove("selected");
        comp_sel = "tbd";
        update();
    }
})

function getRandom() {
    // create a random number that then returns RPS
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
    // primary game logic
    player = choice;
    computer = getRandom()

    if (player === computer) {
        status = "It's a draw"
    } else if (computer === "rock") {
        if (player === "paper") {
            status = "Player Wins"
            score_p++;
        } else {
            status = "Computer Wins"
            score_c++;
        }
    } else if (computer === "paper") {
        if (player === "scissors") {
            status = "Player Wins"
            score_p++;
        } else {
            status = "Computer Wins"
            score_c++;
        }
    } else if (computer === "scissors") {
        if (player === "rock") {
            status = "Player Wins"
            score_p++;
        } else {
            status = "Computer Wins"
            score_c++;
        }
    }
    comp_sel = computer;
    ng = true
    update()
    play.classList.remove("lit");
    ready = false;
    currentStatus.innerHTML = status;
}

function update() {
    if (ready === true) {
        play.classList.add("lit")
        pA.innerHTML = `Player:   ${selection}`;
        pB.innerHTML = `Computer:   ${comp_sel}`;
    } else {
        play.classList.remove("lit")
        pA.innerHTML = "Pick rock, paper, or scissors and press play!";
        pB.innerHTML = "";
    }
    if (ng === true) {
        new_game.classList.add("lit");
    } else {
        new_game.classList.remove("lit");
    }
    pAScore.innerText = `Player: ${score_p}`
    pBScore.innerText = `Computer: ${score_c}`
}
