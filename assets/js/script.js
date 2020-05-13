let gameButton = document.getElementsByClassName("gamebutton");
let startButton = document.querySelector("input");
let allButton = document.querySelectorAll("button")
let playerScoreboard = document.querySelector("data-playerscore");
let iaScoreboard = document.querySelector("data-iascore");

let playerMove = document.getElementById("yourmove");
let computerMove = document.getElementById("computermove");
let playerSelect = document.getElementsByClassName("gamebutton");
let victory = document.getElementById("counterwin");
let draw = document.getElementById("counterdraw");
let lose = document.getElementById("counterlose");

const possibleChoice = ["rock", "paper", "scissors"];
let comMove;
let playerChoice;
let x = 1;
let y = 1;
let z = 1;

allButton.forEach(function (element) {
    element.onclick = function () {
        let buttonValue = element.dataset.value;
        playerChoice = buttonValue;
        console.log("player : " + playerChoice);
    }
})
startButton.onclick = function () {
    let comMove = possibleChoice[Math.floor(Math.random() * 3)];
    console.log("ia : " + comMove);
    if (playerChoice == comMove) {
        console.log(playerChoice);
        console.log(comMove);
        console.log("DRAW");
        document.getElementById("counterdraw").innerHTML = z++;
    } else {
        let win = true;
        switch (playerChoice) {
            case "rock":
                if (comMove == "paper") {
                    win == false
                    console.log("Perdu")
                    document.getElementById("counterlose").innerHTML = y++;
                } else if (comMove == "scissors") {
                    console.log("Gagné")
                    document.getElementById("counterwin").innerHTML = x++;
                }
                break;
            case "paper":
                if (comMove == "scissors") {
                    win == false
                    console.log("Perdu")
                    document.getElementById("counterlose").innerHTML = y++;
                } else if (comMove == "scissors") {
                    console.log("Gagné")
                    document.getElementById("counterwin").innerHTML = x++;
                }
                break;
            case "scissors":
                if (comMove == "rock") {
                    win == false;
                    console.log("Perdu")
                    document.getElementById("counterwin").innerHTML = y++;
                } else if (comMove == "scissors") {
                    console.log("Gagné")
                    document.getElementById("counterlose").innerHTML = x++;
                }
                break;

        }
    }

}